import { PrismaClient, Prisma } from '@prisma/client';

export class LicenseRepository {
  constructor(private prisma: PrismaClient) {}

  findAll() {
    return this.prisma.license.findMany({ orderBy: { order: 'asc' } });
  }

  findById(id: number) {
    return this.prisma.license.findUnique({ where: { id } });
  }

  create(data: Prisma.LicenseCreateInput) {
    return this.prisma.license.create({ data });
  }

  update(id: number, data: Prisma.LicenseUpdateInput) {
    return this.prisma.license.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.license.delete({ where: { id } });
  }
}