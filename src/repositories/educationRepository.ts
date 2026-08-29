import { PrismaClient, Prisma } from '@prisma/client';

export class EducationRepository {
  constructor(private prisma: PrismaClient) {}

  findAll() {
    return this.prisma.education.findMany({ orderBy: { order: 'asc' } });
  }

  findById(id: number) {
    return this.prisma.education.findUnique({ where: { id } });
  }

  create(data: Prisma.EducationCreateInput) {
    return this.prisma.education.create({ data });
  }

  update(id: number, data: Prisma.EducationUpdateInput) {
    return this.prisma.education.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.education.delete({ where: { id } });
  }
}