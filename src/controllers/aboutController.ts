import { Request, Response } from 'express';
import { aboutService } from '../services/aboutService';

export async function getAbout(req: Request, res: Response) {
    try {
        const about = await aboutService.get();
        res.json(about);
    } catch (error) {
        res.status(500).json({
            message: 'Greška pri učitavanju About sekcije',
        });
    }
}

export async function saveAbout(req: Request, res: Response) {
    try {
        const saved = await aboutService.save(req.body);
        res.json(saved);
    } catch (error) {
        res.status(500).json({ message: 'Greška pri čuvanju About sekcije' });
    }
}
