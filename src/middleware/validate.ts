import { ZodObject, ZodRawShape } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from '../errors/AppError';
import { ErrorCode } from '../types/enums';

export function validateBody(schema: ZodObject<ZodRawShape>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const code = result.error.issues[0].message as ErrorCode;
      throw new ValidationError(code);
    }

    req.body = result.data;
    next();
  };
}