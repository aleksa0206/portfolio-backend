import { Router } from 'express';
import {
    getAllLicenses,
    createLicense,
    updateLicense,
    deleteLicense,
} from '../controllers/licenseController';
import { requireAuth } from '../middleware/auth';

const router = Router();

router.get('/', getAllLicenses);
router.post('/', requireAuth, createLicense);
router.put('/:id', requireAuth, updateLicense);
router.delete('/:id', requireAuth, deleteLicense);

export default router;
