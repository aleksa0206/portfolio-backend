import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils/jwt';
import { AuthenticationError } from '../errors/AppError';
import { ErrorCode } from '../types/enums';

export class AuthService {
  constructor(private prisma: PrismaClient) {}

  async login(email: string, password: string) {
    const admin = await this.prisma.admin.findUnique({ where: { email } });

    if (!admin) {
      throw new AuthenticationError(ErrorCode.INVALID_CREDENTIALS);
    }

    const passwordMatches = await bcrypt.compare(password, admin.password);

    if (!passwordMatches) {
      throw new AuthenticationError(ErrorCode.INVALID_CREDENTIALS);
    }

    const token = generateToken({ adminId: admin.id, email: admin.email });

    return { token, email: admin.email };
  }
}