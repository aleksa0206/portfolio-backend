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

/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Get all projects
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: List of projects
 */
router.get('/', getAllProjects);

/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Create a new project
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [title, description, techStack]
 *             properties:
 *               title:
 *                 type: string
 *                 example: Portfolio Website
 *               description:
 *                 type: string
 *               imageUrl:
 *                 type: string
 *               demoUrl:
 *                 type: string
 *               repoUrl:
 *                 type: string
 *               techStack:
 *                 type: string
 *                 example: "Angular, Node.js, MySQL"
 *     responses:
 *       201:
 *         description: Project created
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 */
router.post('/', requireAuth, validateBody(createProjectSchema), createProject);

/**
 * @swagger
 * /projects/{id}:
 *   put:
 *     summary: Update a project
 *     tags: [Projects]
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
 *         description: Project updated
 *       401:
 *         description: Unauthorized
 */
router.put('/:id', requireAuth, validateBody(updateProjectSchema), updateProject);

/**
 * @swagger
 * /projects/{id}:
 *   delete:
 *     summary: Delete a project
 *     tags: [Projects]
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
 *         description: Project deleted
 *       401:
 *         description: Unauthorized
 */
router.delete('/:id', requireAuth, deleteProject);

export default router;