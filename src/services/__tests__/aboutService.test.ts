import { describe, it, expect, vi } from 'vitest';
import { AboutService } from '../aboutService';
import { AboutRepository } from '../../repositories/aboutRepository';

describe('AboutService', () => {
  it('get returns data from repository', async () => {
    const mockRepository = {
      find: vi.fn().mockResolvedValue({ id: 1, fullName: 'Aleksa' }),
    } as unknown as AboutRepository;

    const service = new AboutService(mockRepository);
    const result = await service.get();

    expect(result).toEqual({ id: 1, fullName: 'Aleksa' });
  });

  it('save calls repository upsert with correct data', async () => {
    const mockRepository = {
      upsert: vi.fn().mockResolvedValue({ id: 1 }),
    } as unknown as AboutRepository;

    const service = new AboutService(mockRepository);

    await service.save({
      fullName: 'Aleksa',
      title: 'Software Developer',
      bio: 'Test bio',
    });

    expect(mockRepository.upsert).toHaveBeenCalledWith(
      expect.objectContaining({ fullName: 'Aleksa' })
    );
  });
});