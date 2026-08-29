import { z } from 'zod';
import { ErrorCode } from '../types/enums';

export const loginSchema = z.object({
  email: z.string().email(ErrorCode.INVALID_EMAIL_FORMAT),
  password: z.string().min(1, ErrorCode.PASSWORD_REQUIRED),
});