import { projectRepository } from '../repositories/projectRepository';
import { IProjectInput, IProjectUpdateInput } from '../types/interfaces';

class ProjectService {
    getAll() {
        return projectRepository.findAll();
    }

    async create(input: IProjectInput) {
        return projectRepository.create({
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
        return projectRepository.update(id, {
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
        return projectRepository.remove(id);
    }
}

export const projectService = new ProjectService();
