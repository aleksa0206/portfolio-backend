import { Request, Response } from 'express';
import { container } from '../container';
import { asyncHandler } from '../utils/asyncHandler';
import { NotFoundError } from '../errors/AppError';
import { ErrorCode } from '../types/enums';

async function getAllEducationHandler(req: Request, res: Response) {
  const education = await container.educationService.getAll();
  res.json(education);
}

async function createEducationHandler(req: Request, res: Response) {
  const newEducation = await container.educationService.create(req.body);
  res.status(201).json(newEducation);
}

async function updateEducationHandler(req: Request, res: Response) {
  const { id } = req.params;
  const updated = await container.educationService.update(Number(id), req.body);
  if (!updated) {
    throw new NotFoundError(ErrorCode.EDUCATION_UPDATE_FAILED);
  }
  res.json(updated);
}

async function deleteEducationHandler(req: Request, res: Response) {
  const { id } = req.params;
  await container.educationService.remove(Number(id));
  res.json({ message: 'Education record deleted' });
}

export const getAllEducation = asyncHandler(getAllEducationHandler);
export const createEducation = asyncHandler(createEducationHandler);
export const updateEducation = asyncHandler(updateEducationHandler);
export const deleteEducation = asyncHandler(deleteEducationHandler);