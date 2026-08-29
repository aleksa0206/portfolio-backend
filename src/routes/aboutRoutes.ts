import { Router } from 'express';
import { getAbout, saveAbout } from '../controllers/aboutController';
import { requireAuth } from '../middleware/auth';
import { validateBody } from '../middleware/validate';
import { saveAboutSchema } from '../validations/aboutValidation';

const router = Router();

router.get('/', getAbout);
router.put('/', requireAuth, validateBody(saveAboutSchema), saveAbout);

export default router;