import { Request, Response } from 'express';
import { container } from '../container';
import { asyncHandler } from '../utils/asyncHandler';

async function getAboutHandler(req: Request, res: Response) {
  const about = await container.aboutService.get();
  res.json(about);
}

async function saveAboutHandler(req: Request, res: Response) {
  const saved = await container.aboutService.save(req.body);
  res.json(saved);
}

export const getAbout = asyncHandler(getAboutHandler);
export const saveAbout = asyncHandler(saveAboutHandler);