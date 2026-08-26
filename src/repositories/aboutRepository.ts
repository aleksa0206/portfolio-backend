import prisma from '../config/db';
import { Prisma } from '@prisma/client';

class AboutRepository {
    find() {
        return prisma.about.findFirst();
    }

    async upsert(data: Prisma.AboutCreateInput) {
        const existing = await prisma.about.findFirst();

        if (existing) {
            return prisma.about.update({
                where: { id: existing.id },
                data,
            });
        }

        return prisma.about.create({ data });
    }
}

export const aboutRepository = new AboutRepository();
