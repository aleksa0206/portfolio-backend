import { describe, it, expect, vi } from 'vitest';
import { LicenseService } from '../licenseService';
import { LicenseRepository } from '../../repositories/licenseRepository';

describe('LicenseService', () => {
  it('getAll returns list from repository', async () => {
    const mockRepository = {
      findAll: vi.fn().mockResolvedValue([{ id: 1, name: 'AWS Certified' }]),
    } as unknown as LicenseRepository;

    const service = new LicenseService(mockRepository);
    const result = await service.getAll();

    expect(result).toEqual([{ id: 1, name: 'AWS Certified' }]);
    expect(mockRepository.findAll).toHaveBeenCalledOnce();
  });

  it('create converts date strings to Date objects', async () => {
    const mockRepository = {
      create: vi.fn().mockResolvedValue({ id: 1 }),
    } as unknown as LicenseRepository;

    const service = new LicenseService(mockRepository);

    await service.create({
      name: 'AWS Certified',
      issuer: 'Amazon',
      issueDate: '2023-05-01',
    });

    expect(mockRepository.create).toHaveBeenCalledWith(
      expect.objectContaining({
        issueDate: new Date('2023-05-01'),
      })
    );
  });

  it('remove calls repository remove with correct id', async () => {
    const mockRepository = {
      remove: vi.fn().mockResolvedValue(undefined),
    } as unknown as LicenseRepository;

    const service = new LicenseService(mockRepository);
    await service.remove(5);

    expect(mockRepository.remove).toHaveBeenCalledWith(5);
  });
});