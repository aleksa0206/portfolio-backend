import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

export function generateToken(payload: {
    adminId: number;
    email: string;
}): string {
    return jwt.sign(payload, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN,
    } as jwt.SignOptions);
}

export function verifyToken(token: string): { adminId: number; email: string } {
    return jwt.verify(token, JWT_SECRET) as { adminId: number; email: string };
}
