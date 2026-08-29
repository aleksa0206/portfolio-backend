import { Router } from 'express';
import {
  getAllEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} from '../controllers/educationController';
import { requireAuth } from '../middleware/auth';
import { validateBody } from '../middleware/validate';
import { createEducationSchema, updateEducationSchema } from '../validations/educationValidation';

const router = Router();

router.get('/', getAllEducation);
router.post('/', requireAuth, validateBody(createEducationSchema), createEducation);
router.put('/:id', requireAuth, validateBody(updateEducationSchema), updateEducation);
router.delete('/:id', requireAuth, deleteEducation);

export default router;