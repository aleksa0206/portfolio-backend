import { z } from 'zod';
import { ErrorCode } from '../types/enums';

export const createLicenseSchema = z.object({
  name: z.string().min(1, ErrorCode.LICENSE_NAME_REQUIRED),
  issuer: z.string().min(1, ErrorCode.ISSUER_REQUIRED),
  issueDate: z.string().min(1, ErrorCode.ISSUE_DATE_REQUIRED),
  expiryDate: z.string().optional(),
  credentialUrl: z.string().optional(),
  order: z.number().optional(),
});

export const updateLicenseSchema = createLicenseSchema.partial();