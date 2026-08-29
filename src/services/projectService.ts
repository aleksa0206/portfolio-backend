import { ProjectRepository } from '../repositories/projectRepository';
import { IProjectInput, IProjectUpdateInput } from '../types/interfaces';

export class ProjectService {
  constructor(private projectRepository: ProjectRepository) {}

  getAll() {
    return this.projectRepository.findAll();
  }

  async create(input: IProjectInput) {
    return this.projectRepository.create({
      title: input.title,
      description: input.description,
      imageUrl: input.imageUrl,
      demoUrl: input.demoUrl,
      repoUrl: input.repoUrl,
      techStack: input.techStack,
      order: input.order ?? 0,
    });
  }

  async update(id: number, input: IProjectUpdateInput) {
    return this.projectRepository.update(id, {
      title: input.title,
      description: input.description,
      imageUrl: input.imageUrl,
      demoUrl: input.demoUrl,
      repoUrl: input.repoUrl,
      techStack: input.techStack,
      order: input.order,
    });
  }

  remove(id: number) {
    return this.projectRepository.remove(id);
  }
}