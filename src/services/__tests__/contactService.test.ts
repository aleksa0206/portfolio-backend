import { describe, it, expect, vi } from 'vitest';
import { ContactService } from '../contactService';
import { ContactRepository } from '../../repositories/contactRepository';

describe('ContactService', () => {
  it('submit creates a new message', async () => {
    const mockRepository = {
      create: vi.fn().mockResolvedValue({ id: 1, name: 'Marko' }),
    } as unknown as ContactRepository;

    const service = new ContactService(mockRepository);
    const result = await service.submit({
      name: 'Marko',
      email: 'marko@example.com',
      message: 'Hello!',
    });

    expect(result).toEqual({ id: 1, name: 'Marko' });
  });

  it('markAsRead calls repository with correct id', async () => {
    const mockRepository = {
      markAsRead: vi.fn().mockResolvedValue({ id: 3, isRead: true }),
    } as unknown as ContactRepository;

    const service = new ContactService(mockRepository);
    await service.markAsRead(3);

    expect(mockRepository.markAsRead).toHaveBeenCalledWith(3);
  });
});