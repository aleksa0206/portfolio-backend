import { Request, Response } from 'express';
import { educationService } from '../services/educationService';

export async function getAllEducation(req: Request, res: Response) {
    try {
        const education = await educationService.getAll();
        res.json(education);
    } catch (error) {
        res.status(500).json({ message: 'Greška pri učitavanju obrazovanja' });
    }
}

export async function createEducation(req: Request, res: Response) {
    try {
        const newEducation = await educationService.create(req.body);
        res.status(201).json(newEducation);
    } catch (error) {
        res.status(500).json({ message: 'Greška pri kreiranju obrazovanja' });
    }
}

export async function updateEducation(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const updated = await educationService.update(Number(id), req.body);
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: 'Greška pri izmeni obrazovanja' });
    }
}

export async function deleteEducation(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await educationService.remove(Number(id));
        res.json({ message: 'Obrazovanje obrisano' });
    } catch (error) {
        res.status(500).json({ message: 'Greška pri brisanju obrazovanja' });
    }
}
