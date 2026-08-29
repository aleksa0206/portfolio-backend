import { Request, Response, NextFunction } from 'express';
import { AppError } from '../errors/AppError';
import { ErrorCode } from '../types/enums';
import { logger } from '../config/logger';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      code: err.code,
      message: err.message,
    });
  }

  logger.error({ err }, 'Unexpected error');
  res.status(500).json({ code: ErrorCode.INTERNAL_ERROR, message: 'Internal server error' });
}