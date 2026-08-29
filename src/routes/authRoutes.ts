import { Router } from 'express';
import { login } from '../controllers/authController';
import { validateBody } from '../middleware/validate';
import { loginSchema } from '../validations/authValidation';
import { loginRateLimiter } from '../middleware/rateLimiter';

const router = Router();

router.post('/login', loginRateLimiter, validateBody(loginSchema), login);

export default router;