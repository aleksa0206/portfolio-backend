import { Router } from 'express';
import {
  getAllEducation,
  createEducation,
  updateEducation,
  deleteEducation,
} from '../controllers/educationController';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.get('/', getAllEducation);
router.post('/', requireAuth, createEducation);
router.put('/:id', requireAuth, updateEducation);
router.delete('/:id', requireAuth, deleteEducation);

export default router;