import { Router } from 'express';
import {
  getAllProjects,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController';
import { requireAuth } from '../middleware/auth';
import { validateBody } from '../middleware/validate';
import { createProjectSchema, updateProjectSchema } from '../validations/projectValidation';

const router = Router();

router.get('/', getAllProjects);
router.post('/', requireAuth, validateBody(createProjectSchema), createProject);
router.put('/:id', requireAuth, validateBody(updateProjectSchema), updateProject);
router.delete('/:id', requireAuth, deleteProject);

export default router;