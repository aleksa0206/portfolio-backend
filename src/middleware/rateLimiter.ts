import rateLimit from 'express-rate-limit';
import { Request, Response } from 'express';
import { ErrorCode } from '../types/enums';
import { ErrorMessages } from '../constants/errorMessages';

export const loginRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  handler: (req: Request, res: Response) => {
    res.status(429).json({
      code: ErrorCode.TOO_MANY_REQUESTS,
      message: ErrorMessages[ErrorCode.TOO_MANY_REQUESTS],
    });
  },
});

export const contactRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 5,
  handler: (req: Request, res: Response) => {
    res.status(429).json({
      code: ErrorCode.TOO_MANY_REQUESTS,
      message: ErrorMessages[ErrorCode.TOO_MANY_REQUESTS],
    });
  },
});