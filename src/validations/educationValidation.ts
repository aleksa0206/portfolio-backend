import { z } from 'zod';
import { ErrorCode } from '../types/enums';

export const createEducationSchema = z.object({
  institution: z.string().min(1, ErrorCode.INSTITUTION_REQUIRED),
  degree: z.string().min(1, ErrorCode.DEGREE_REQUIRED),
  fieldOfStudy: z.string().optional(),
  startDate: z.string().min(1, ErrorCode.START_DATE_REQUIRED),
  endDate: z.string().optional(),
  description: z.string().optional(),
  order: z.number().optional(),
});

export const updateEducationSchema = createEducationSchema.partial();