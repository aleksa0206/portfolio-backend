import { Router } from 'express';
import {
    getAllProjects,
    createProject,
    updateProject,
    deleteProject,
} from '../controllers/projectController';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.get('/', getAllProjects);
router.post('/', requireAuth, createProject);
router.put('/:id', requireAuth, updateProject);
router.delete('/:id', requireAuth, deleteProject);

export default router;
