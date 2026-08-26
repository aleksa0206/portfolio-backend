import { Request, Response } from 'express';
import { licenseService } from '../services/licenseService';

export async function getAllLicenses(req: Request, res: Response) {
    try {
        const licenses = await licenseService.getAll();
        res.json(licenses);
    } catch (error) {
        res.status(500).json({ message: 'Greška pri učitavanju licenci' });
    }
}

export async function createLicense(req: Request, res: Response) {
    try {
        const newLicense = await licenseService.create(req.body);
        res.status(201).json(newLicense);
    } catch (error) {
        res.status(500).json({ message: 'Greška pri kreiranju licence' });
    }
}

export async function updateLicense(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const updated = await licenseService.update(Number(id), req.body);
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: 'Greška pri izmeni licence' });
    }
}

export async function deleteLicense(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await licenseService.remove(Number(id));
        res.json({ message: 'Licenca obrisana' });
    } catch (error) {
        res.status(500).json({ message: 'Greška pri brisanju licence' });
    }
}
