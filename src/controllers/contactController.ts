import { Request, Response } from 'express';
import { contactService } from '../services/contactService';

export async function getAllMessages(req: Request, res: Response) {
    try {
        const messages = await contactService.getAll();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Greška pri učitavanju poruka' });
    }
}

export async function submitMessage(req: Request, res: Response) {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: 'Sva polja su obavezna' });
        }

        const newMessage = await contactService.submit(req.body);
        res.status(201).json({ message: 'Poruka uspešno poslata', data: newMessage });
    } catch (error) {
        res.status(500).json({ message: 'Greška pri slanju poruke' });
    }
}

export async function markMessageAsRead(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const updated = await contactService.markAsRead(Number(id));
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: 'Greška pri označavanju poruke' });
    }
}

export async function deleteMessage(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await contactService.remove(Number(id));
        res.json({ message: 'Poruka obrisana' });
    } catch (error) {
        res.status(500).json({ message: 'Greška pri brisanju poruke' });
    }
}