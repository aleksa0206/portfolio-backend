import prisma from '../config/db';
import { Prisma } from '@prisma/client';

class ProjectRepository {
    findAll() {
        return prisma.project.findMany({ orderBy: { order: 'asc' } });
    }

    findById(id: number) {
        return prisma.project.findUnique({ where: { id } });
    }

    create(data: Prisma.ProjectCreateInput) {
        return prisma.project.create({ data });
    }

    update(id: number, data: Prisma.ProjectUpdateInput) {
        return prisma.project.update({ where: { id }, data });
    }

    remove(id: number) {
        return prisma.project.delete({ where: { id } });
    }
}

export const projectRepository = new ProjectRepository();
