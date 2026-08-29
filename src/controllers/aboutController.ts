import { Request, Response } from 'express';
import { aboutService } from '../services/aboutService';
import { asyncHandler } from '../utils/asyncHandler';

async function getAboutHandler(req: Request, res: Response) {
  const about = await aboutService.get();
  res.json(about);
}

async function saveAboutHandler(req: Request, res: Response) {
  const saved = await aboutService.save(req.body);
  res.json(saved);
}

export const getAbout = asyncHandler(getAboutHandler);
export const saveAbout = asyncHandler(saveAboutHandler);