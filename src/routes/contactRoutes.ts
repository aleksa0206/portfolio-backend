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

router.post('/', contactRateLimiter, validateBody(submitContactSchema), submitMessage);

router.get('/', requireAuth, getAllMessages);
router.put('/:id/read', requireAuth, markMessageAsRead);
router.delete('/:id', requireAuth, deleteMessage);

export default router;