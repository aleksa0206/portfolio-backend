import { Request, Response } from 'express';
import { container } from '../container';
import { asyncHandler } from '../utils/asyncHandler';

async function loginHandler(req: Request, res: Response) {
  const { email, password } = req.body;
  const result = await container.authService.login(email, password);
  res.json(result);
}

export const login = asyncHandler(loginHandler);