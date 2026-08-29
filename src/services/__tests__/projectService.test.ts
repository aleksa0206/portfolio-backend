import { describe, it, expect, vi } from 'vitest';
import { ProjectService } from '../projectService';
import { ProjectRepository } from '../../repositories/projectRepository';

describe('ProjectService', () => {
  it('getAll returns list from repository', async () => {
    const mockRepository = {
      findAll: vi.fn().mockResolvedValue([{ id: 1, title: 'Portfolio Site' }]),
    } as unknown as ProjectRepository;

    const service = new ProjectService(mockRepository);
    const result = await service.getAll();

    expect(result).toEqual([{ id: 1, title: 'Portfolio Site' }]);
  });

  it('create passes default order 0 when not provided', async () => {
    const mockRepository = {
      create: vi.fn().mockResolvedValue({ id: 1 }),
    } as unknown as ProjectRepository;

    const service = new ProjectService(mockRepository);

    await service.create({
      title: 'Portfolio Site',
      description: 'A personal portfolio',
      techStack: 'Angular, Node.js',
    });

    expect(mockRepository.create).toHaveBeenCalledWith(
      expect.objectContaining({ order: 0 })
    );
  });
});