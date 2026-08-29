import { Router } from 'express';
import { login } from '../controllers/authController';
import { validateBody } from '../middleware/validate';
import { loginSchema } from '../validations/authValidation';
import { loginRateLimiter } from '../middleware/rateLimiter';

const router = Router();

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Admin login
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [email, password]
 *             properties:
 *               email:
 *                 type: string
 *                 example: admin@example.com
 *               password:
 *                 type: string
 *                 example: admin123
 *     responses:
 *       200:
 *         description: Login successful, returns JWT token
 *       400:
 *         description: Validation error
 *       401:
 *         description: Invalid credentials
 *       429:
 *         description: Too many login attempts
 */
router.post('/login', loginRateLimiter, validateBody(loginSchema), login);

export default router;