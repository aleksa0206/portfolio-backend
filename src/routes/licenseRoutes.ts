import { Router } from 'express';
import {
  getAllLicenses,
  createLicense,
  updateLicense,
  deleteLicense,
} from '../controllers/licenseController';
import { requireAuth } from '../middleware/auth';
import { validateBody } from '../middleware/validate';
import { createLicenseSchema, updateLicenseSchema } from '../validations/licenseValidation';

const router = Router();

/**
 * @swagger
 * /licenses:
 *   get:
 *     summary: Get all licenses
 *     tags: [Licenses]
 *     responses:
 *       200:
 *         description: List of licenses
 */
router.get('/', getAllLicenses);

/**
 * @swagger
 * /licenses:
 *   post:
 *     summary: Create a new license
 *     tags: [Licenses]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, issuer, issueDate]
 *             properties:
 *               name:
 *                 type: string
 *                 example: AWS Certified Developer
 *               issuer:
 *                 type: string
 *                 example: Amazon Web Services
 *               issueDate:
 *                 type: string
 *                 example: "2023-05-01"
 *               expiryDate:
 *                 type: string
 *               credentialUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: License created
 *       400:
 *         description: Validation error
 *       401:
 *         description: Unauthorized
 */
router.post('/', requireAuth, validateBody(createLicenseSchema), createLicense);

/**
 * @swagger
 * /licenses/{id}:
 *   put:
 *     summary: Update a license
 *     tags: [Licenses]
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
 *         description: License updated
 *       401:
 *         description: Unauthorized
 */
router.put('/:id', requireAuth, validateBody(updateLicenseSchema), updateLicense);

/**
 * @swagger
 * /licenses/{id}:
 *   delete:
 *     summary: Delete a license
 *     tags: [Licenses]
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
 *         description: License deleted
 *       401:
 *         description: Unauthorized
 */
router.delete('/:id', requireAuth, deleteLicense);

export default router;