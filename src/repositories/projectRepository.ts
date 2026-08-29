import { PrismaClient, Prisma } from '@prisma/client';

export class ProjectRepository {
  constructor(private prisma: PrismaClient) {}

  findAll() {
    return this.prisma.project.findMany({ orderBy: { order: 'asc' } });
  }

  findById(id: number) {
    return this.prisma.project.findUnique({ where: { id } });
  }

  create(data: Prisma.ProjectCreateInput) {
    return this.prisma.project.create({ data });
  }

  update(id: number, data: Prisma.ProjectUpdateInput) {
    return this.prisma.project.update({ where: { id }, data });
  }

  remove(id: number) {
    return this.prisma.project.delete({ where: { id } });
  }
}