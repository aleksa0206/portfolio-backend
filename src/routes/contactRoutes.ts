import { Router } from 'express';
import {
  getAllMessages,
  submitMessage,
  markMessageAsRead,
  deleteMessage,
} from '../controllers/contactController';
import { requireAuth } from '../middleware/auth';
import { validateBody } from '../middleware/validate';
import { submitContactSchema } from '../validations/contactValidation';
import { contactRateLimiter } from '../middleware/rateLimiter';

const router = Router();

/**
 * @swagger
 * /contact:
 *   post:
 *     summary: Submit a contact message
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, message]
 *             properties:
 *               name:
 *                 type: string
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 example: john@example.com
 *               message:
 *                 type: string
 *     responses:
 *       201:
 *         description: Message sent successfully
 *       400:
 *         description: Validation error
 *       429:
 *         description: Too many messages sent
 */
router.post('/', contactRateLimiter, validateBody(submitContactSchema), submitMessage);

/**
 * @swagger
 * /contact:
 *   get:
 *     summary: Get all contact messages
 *     tags: [Contact]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of contact messages
 *       401:
 *         description: Unauthorized
 */
router.get('/', requireAuth, getAllMessages);

/**
 * @swagger
 * /contact/{id}/read:
 *   put:
 *     summary: Mark a message as read
 *     tags: [Contact]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Message marked as read
 *       401:
 *         description: Unauthorized
 */
router.put('/:id/read', requireAuth, markMessageAsRead);

/**
 * @swagger
 * /contact/{id}:
 *   delete:
 *     summary: Delete a contact message
 *     tags: [Contact]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Message deleted
 *       401:
 *         description: Unauthorized
 */
router.delete('/:id', requireAuth, deleteMessage);

export default router;