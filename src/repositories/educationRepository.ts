import prisma from '../config/db';
import { Prisma } from '@prisma/client';

class EducationRepository {
    findAll() {
        return prisma.education.findMany({ orderBy: { order: 'asc' } });
    }

    findById(id: number) {
        return prisma.education.findUnique({ where: { id } });
    }

    create(data: Prisma.EducationCreateInput) {
        return prisma.education.create({ data });
    }

    update(id: number, data: Prisma.EducationUpdateInput) {
        return prisma.education.update({ where: { id }, data });
    }

    remove(id: number) {
        return prisma.education.delete({ where: { id } });
    }
}

export const educationRepository = new EducationRepository();
