import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';
import { AuthenticationError } from '../errors/AppError';
import { ErrorCode } from '../types/enums';

const MAX_FAILED_ATTEMPTS = 5;
const LOCKOUT_MS = 15 * 60 * 1000;

// ponytail: in-memory per-account lockout, move to DB/Redis if this ever runs multi-instance
const failedAttempts = new Map<string, { count: number; lockedUntil?: number }>();

export class AuthService {
  constructor(private prisma: PrismaClient) {}

  async login(email: string, password: string) {
    const state = failedAttempts.get(email);

    if (state?.lockedUntil && state.lockedUntil > Date.now()) {
      throw new AuthenticationError(ErrorCode.ACCOUNT_LOCKED);
    }

    const admin = await this.prisma.admin.findUnique({ where: { email } });
    const passwordMatches = admin ? await bcrypt.compare(password, admin.password) : false;

    if (!admin || !passwordMatches) {
      const count = (state?.count ?? 0) + 1;
      failedAttempts.set(email, {
        count,
        lockedUntil: count >= MAX_FAILED_ATTEMPTS ? Date.now() + LOCKOUT_MS : undefined,
      });
      throw new AuthenticationError(ErrorCode.INVALID_CREDENTIALS);
    }

    failedAttempts.delete(email);

    const token = generateToken({ adminId: admin.id, email: admin.email });

    return { token, email: admin.email };
  }
}