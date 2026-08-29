import { describe, it, expect, vi } from 'vitest';
import { EducationService } from '../educationService';
import { EducationRepository } from '../../repositories/educationRepository';

describe('EducationService', () => {
  it('getAll returns list from repository', async () => {
    const mockRepository = {
      findAll: vi.fn().mockResolvedValue([
        { id: 1, institution: 'Test University', degree: 'BSc' },
      ]),
    } as unknown as EducationRepository;

    const service = new EducationService(mockRepository);
    const result = await service.getAll();

    expect(result).toEqual([{ id: 1, institution: 'Test University', degree: 'BSc' }]);
    expect(mockRepository.findAll).toHaveBeenCalledOnce();
  });

  it('create converts date strings to Date objects', async () => {
    const mockRepository = {
      create: vi.fn().mockResolvedValue({ id: 1 }),
    } as unknown as EducationRepository;

    const service = new EducationService(mockRepository);

    await service.create({
      institution: 'Test University',
      degree: 'BSc',
      startDate: '2020-01-01',
      endDate: '2024-01-01',
    });

    expect(mockRepository.create).toHaveBeenCalledWith(
      expect.objectContaining({
        startDate: new Date('2020-01-01'),
        endDate: new Date('2024-01-01'),
      })
    );
  });
});