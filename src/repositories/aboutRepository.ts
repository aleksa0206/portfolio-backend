import { PrismaClient, Prisma } from '@prisma/client';

export class AboutRepository {
  constructor(private prisma: PrismaClient) {}

  find() {
    return this.prisma.about.findFirst();
  }

  async upsert(data: Prisma.AboutCreateInput) {
    const existing = await this.prisma.about.findFirst();

    if (existing) {
      return this.prisma.about.update({
        where: { id: existing.id },
        data,
      });
    }

    return this.prisma.about.create({ data });
  }
}