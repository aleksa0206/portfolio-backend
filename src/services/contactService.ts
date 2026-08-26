import { contactRepository } from '../repositories/contactRepository';
import { IContactMessageInput } from '../types/interfaces';

class ContactService {
    getAll() {
        return contactRepository.findAll();
    }

    async submit(input: IContactMessageInput) {
        return contactRepository.create({
            name: input.name,
            email: input.email,
            message: input.message,
        });
    }

    markAsRead(id: number) {
        return contactRepository.markAsRead(id);
    }

    remove(id: number) {
        return contactRepository.remove(id);
    }
}

export const contactService = new ContactService();