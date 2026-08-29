import { z } from 'zod';
import { ErrorCode } from '../types/enums';

export const submitContactSchema = z.object({
  name: z.string().min(1, ErrorCode.CONTACT_NAME_REQUIRED),
  email: z.string().email(ErrorCode.INVALID_EMAIL_FORMAT),
  message: z.string().min(1, ErrorCode.CONTACT_MESSAGE_REQUIRED),
});