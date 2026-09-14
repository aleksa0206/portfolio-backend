import { Request, Response, NextFunction } from 'express';
import { Prisma } from '@prisma/client';
import { AppError } from '../errors/AppError';
import { ErrorCode } from '../types/enums';
import { ErrorMessages } from '../constants/errorMessages';
import { logger } from '../config/logger';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      code: err.code,
      message: err.message,
    });
  }

  // Prisma throws P2025 when update()/delete() targets a row that doesn't exist.
  if (err instanceof Prisma.PrismaClientKnownRequestError && err.code === 'P2025') {
    return res.status(404).json({
      code: ErrorCode.NOT_FOUND,
      message: ErrorMessages[ErrorCode.NOT_FOUND],
    });
  }

  logger.error({ err }, 'Unexpected error');
  res.status(500).json({ code: ErrorCode.INTERNAL_ERROR, message: 'Internal server error' });
}