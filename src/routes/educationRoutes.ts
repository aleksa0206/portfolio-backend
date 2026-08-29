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

/**
 * @swagger
 * /education:
 *   get:
 *     summary: Get all education records
 *     tags: [Education]
 *     responses:
 *       200:
 *         description: List of education records
 */
router.get('/', getAllEducation);

/**
 * @swagger
 * /education:
 *   post:
 *     summary: Create a new education record
 *     tags: [Education]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [institution, degree, startDate]
 *             properties:
 *               institution:
 *                 type: string
 *                 example: MIT
 *               degree:
 *                 type: string
 *                 example: BSc Computer Science
 *               fieldOfStudy:
 *                 type: string
 *               startDate:
 *                 type: string
 *                 example: "2020-09-01"
 *               endDate:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Education record created
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 */
router.post('/', requireAuth, validateBody(createEducationSchema), createEducation);

/**
 * @swagger
 * /education/{id}:
 *   put:
 *     summary: Update an education record
 *     tags: [Education]
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
 *         description: Education record updated
 *       401:
 *         description: Unauthorized
 */
router.put('/:id', requireAuth, validateBody(updateEducationSchema), updateEducation);

/**
 * @swagger
 * /education/{id}:
 *   delete:
 *     summary: Delete an education record
 *     tags: [Education]
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
 *         description: Education record deleted
 *       401:
 *         description: Unauthorized
 */
router.delete('/:id', requireAuth, deleteEducation);

export default router;