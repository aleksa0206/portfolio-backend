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

router.get('/', getAllLicenses);
router.post('/', requireAuth, validateBody(createLicenseSchema), createLicense);
router.put('/:id', requireAuth, validateBody(updateLicenseSchema), updateLicense);
router.delete('/:id', requireAuth, deleteLicense);

export default router;