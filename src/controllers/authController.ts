import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import prisma from '../config/db';
import { generateToken } from '../utils/jwt';

export async function login(req: Request, res: Response) {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res
                .status(400)
                .json({ message: 'Email i lozinka su obavezni' });
        }

        const admin = await prisma.admin.findUnique({ where: { email } });

        if (!admin) {
            return res
                .status(401)
                .json({ message: 'Pogrešan email ili lozinka' });
        }

        const passwordMatches = await bcrypt.compare(password, admin.password);

        if (!passwordMatches) {
            return res
                .status(401)
                .json({ message: 'Pogrešan email ili lozinka' });
        }

        const token = generateToken({ adminId: admin.id, email: admin.email });

        res.json({ token, email: admin.email });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Greška na serveru' });
    }
}
