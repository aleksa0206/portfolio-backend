import jwt from 'jsonwebtoken';

export function generateToken(payload: {
    adminId: number;
    email: string;
}): string {
    return jwt.sign(payload, process.env.JWT_SECRET as string, {
        expiresIn: process.env.JWT_EXPIRES_IN || '7d',
    } as jwt.SignOptions);
}

export function verifyToken(token: string): { adminId: number; email: string } {
    return jwt.verify(token, process.env.JWT_SECRET as string) as { adminId: number; email: string };
}
