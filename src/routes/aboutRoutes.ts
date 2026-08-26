import { Router } from 'express';
import { getAbout, saveAbout } from '../controllers/aboutController';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.get('/', getAbout);
router.put('/', requireAuth, saveAbout);

export default router;
