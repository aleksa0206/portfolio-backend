import { z } from 'zod';
import { ErrorCode } from '../types/enums';

export const saveAboutSchema = z.object({
  fullName: z.string().min(1, ErrorCode.FULL_NAME_REQUIRED),
  title: z.string().min(1, ErrorCode.TITLE_REQUIRED),
  bio: z.string().min(1, ErrorCode.BIO_REQUIRED),
  photoUrl: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
  location: z.string().optional(),
});