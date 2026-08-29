import { z } from 'zod';
import { ErrorCode } from '../types/enums';

export const createProjectSchema = z.object({
  title: z.string().min(1, ErrorCode.PROJECT_TITLE_REQUIRED),
  description: z.string().min(1, ErrorCode.DESCRIPTION_REQUIRED),
  imageUrl: z.string().optional(),
  demoUrl: z.string().optional(),
  repoUrl: z.string().optional(),
  techStack: z.string().min(1, ErrorCode.TECH_STACK_REQUIRED),
  order: z.number().optional(),
});

export const updateProjectSchema = createProjectSchema.partial();