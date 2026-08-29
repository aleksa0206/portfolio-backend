import { PrismaClient, Prisma } from '@prisma/client';

export class ContactRepository {
  constructor(private prisma: PrismaClient) {}

  findAll() {
    return this.prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } });
  }

  create(data: Prisma.ContactMessageCreateInput) {
    return this.prisma.contactMessage.create({ data });
  }

  markAsRead(id: number) {
    return this.prisma.contactMessage.update({
      where: { id },
      data: { isRead: true },
    });
  }

  remove(id: number) {
    return this.prisma.contactMessage.delete({ where: { id } });
  }
}