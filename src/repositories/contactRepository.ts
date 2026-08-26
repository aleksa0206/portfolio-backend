import prisma from '../config/db';
import { Prisma } from '@prisma/client';

class ContactRepository {
    findAll() {
        return prisma.contactMessage.findMany({ orderBy: { createdAt: 'desc' } });
    }

    create(data: Prisma.ContactMessageCreateInput) {
        return prisma.contactMessage.create({ data });
    }

    markAsRead(id: number) {
        return prisma.contactMessage.update({
            where: { id },
            data: { isRead: true },
        });
    }

    remove(id: number) {
        return prisma.contactMessage.delete({ where: { id } });
    }
}

export const contactRepository = new ContactRepository();