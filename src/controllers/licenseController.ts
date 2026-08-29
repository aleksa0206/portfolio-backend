import { Request, Response } from 'express';
import { container } from "../container";
import { asyncHandler } from '../utils/asyncHandler';
import { NotFoundError } from '../errors/AppError';
import { ErrorCode } from '../types/enums';

async function getAllLicensesHandler(req: Request, res: Response) {
  const licenses = await container.licenseService.getAll();
  res.json(licenses);
}

async function createLicenseHandler(req: Request, res: Response) {
  const newLicense = await container.licenseService.create(req.body);
  res.status(201).json(newLicense);
}

async function updateLicenseHandler(req: Request, res: Response) {
  const { id } = req.params;
  const updated = await container.licenseService.update(Number(id), req.body);
  if (!updated) {
    throw new NotFoundError(ErrorCode.LICENSE_UPDATE_FAILED);
  }
  res.json(updated);
}

async function deleteLicenseHandler(req: Request, res: Response) {
  const { id } = req.params;
  await container.licenseService.remove(Number(id));
  res.json({ message: 'License deleted' });
}

export const getAllLicenses = asyncHandler(getAllLicensesHandler);
export const createLicense = asyncHandler(createLicenseHandler);
export const updateLicense = asyncHandler(updateLicenseHandler);
export const deleteLicense = asyncHandler(deleteLicenseHandler);