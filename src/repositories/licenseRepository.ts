import prisma from '../config/db';
import { Prisma } from '@prisma/client';

class LicenseRepository {
    findAll() {
        return prisma.license.findMany({ orderBy: { order: 'asc' } });
    }

    findById(id: number) {
        return prisma.license.findUnique({ where: { id } });
    }

    create(data: Prisma.LicenseCreateInput) {
        return prisma.license.create({ data });
    }

    update(id: number, data: Prisma.LicenseUpdateInput) {
        return prisma.license.update({ where: { id }, data });
    }

    remove(id: number) {
        return prisma.license.delete({ where: { id } });
    }
}

export const licenseRepository = new LicenseRepository();
