import { Request, Response } from 'express';
import { licenseService } from '../services/licenseService';
import { asyncHandler } from '../utils/asyncHandler';
import { NotFoundError } from '../errors/AppError';
import { ErrorCode } from '../types/enums';

async function getAllLicensesHandler(req: Request, res: Response) {
  const licenses = await licenseService.getAll();
  res.json(licenses);
}

async function createLicenseHandler(req: Request, res: Response) {
  const newLicense = await licenseService.create(req.body);
  res.status(201).json(newLicense);
}

async function updateLicenseHandler(req: Request, res: Response) {
  const { id } = req.params;
  const updated = await licenseService.update(Number(id), req.body);
  if (!updated) {
    throw new NotFoundError(ErrorCode.LICENSE_UPDATE_FAILED);
  }
  res.json(updated);
}

async function deleteLicenseHandler(req: Request, res: Response) {
  const { id } = req.params;
  await licenseService.remove(Number(id));
  res.json({ message: 'License deleted' });
}

export const getAllLicenses = asyncHandler(getAllLicensesHandler);
export const createLicense = asyncHandler(createLicenseHandler);
export const updateLicense = asyncHandler(updateLicenseHandler);
export const deleteLicense = asyncHandler(deleteLicenseHandler);