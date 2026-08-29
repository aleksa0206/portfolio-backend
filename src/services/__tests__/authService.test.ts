import { describe, it, expect, vi } from 'vitest';
import bcrypt from 'bcryptjs';
import { AuthService } from '../authService';
import { AuthenticationError } from '../../errors/AppError';

vi.mock('bcryptjs');

describe('AuthService', () => {
  it('throws AuthenticationError when admin does not exist', async () => {
    const mockPrisma = {
      admin: { findUnique: vi.fn().mockResolvedValue(null) },
    } as any;

    const service = new AuthService(mockPrisma);

    await expect(service.login('nobody@example.com', 'password')).rejects.toThrow(
      AuthenticationError
    );
  });

  it('throws AuthenticationError when password does not match', async () => {
    const mockPrisma = {
      admin: {
        findUnique: vi.fn().mockResolvedValue({ id: 1, email: 'admin@example.com', password: 'hashed' }),
      },
    } as any;

    vi.mocked(bcrypt.compare).mockResolvedValue(false as never);

    const service = new AuthService(mockPrisma);

    await expect(service.login('admin@example.com', 'wrongpassword')).rejects.toThrow(
      AuthenticationError
    );
  });

  it('returns token when credentials are correct', async () => {
    const mockPrisma = {
      admin: {
        findUnique: vi.fn().mockResolvedValue({ id: 1, email: 'admin@example.com', password: 'hashed' }),
      },
    } as any;

    vi.mocked(bcrypt.compare).mockResolvedValue(true as never);

    const service = new AuthService(mockPrisma);
    const result = await service.login('admin@example.com', 'correctpassword');

    expect(result).toHaveProperty('token');
    expect(result.email).toBe('admin@example.com');
  });
});