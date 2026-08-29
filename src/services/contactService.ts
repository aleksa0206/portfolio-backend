import { ContactRepository } from '../repositories/contactRepository';
import { IContactMessageInput } from '../types/interfaces';

export class ContactService {
  constructor(private contactRepository: ContactRepository) {}

  getAll() {
    return this.contactRepository.findAll();
  }

  async submit(input: IContactMessageInput) {
    return this.contactRepository.create({
      name: input.name,
      email: input.email,
      message: input.message,
    });
  }

  markAsRead(id: number) {
    return this.contactRepository.markAsRead(id);
  }

  remove(id: number) {
    return this.contactRepository.remove(id);
  }
}