import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import prisma from '../config/db';
import { generateToken } from '../utils/jwt';
import { asyncHandler } from '../utils/asyncHandler';
import { ValidationError, AuthenticationError } from '../errors/AppError';
import { ErrorCode } from '../types/enums';

async function loginHandler(req: Request, res: Response) {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ValidationError(ErrorCode.VALIDATION_ERROR, 'Email and password are required');
  }

  const admin = await prisma.admin.findUnique({ where: { email } });

  if (!admin) {
    throw new AuthenticationError(ErrorCode.INVALID_CREDENTIALS);
  }

  const passwordMatches = await bcrypt.compare(password, admin.password);

  if (!passwordMatches) {
    throw new AuthenticationError(ErrorCode.INVALID_CREDENTIALS);
  }

  const token = generateToken({ adminId: admin.id, email: admin.email });

  res.json({ token, email: admin.email });
}

export const login = asyncHandler(loginHandler);