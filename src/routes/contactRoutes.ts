import { Router } from 'express';
import {
    getAllMessages,
    submitMessage,
    markMessageAsRead,
    deleteMessage,
} from '../controllers/contactController';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.post('/', submitMessage);

router.get('/', requireAuth, getAllMessages);
router.put('/:id/read', requireAuth, markMessageAsRead);
router.delete('/:id', requireAuth, deleteMessage);

export default router;