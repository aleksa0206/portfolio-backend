import { EducationRepository } from '../repositories/educationRepository';
import { IEducationInput, IEducationUpdateInput } from '../types/interfaces';

export class EducationService {
  constructor(private educationRepository: EducationRepository) {}

  getAll() {
    return this.educationRepository.findAll();
  }

  async create(input: IEducationInput) {
    return this.educationRepository.create({
      institution: input.institution,
      degree: input.degree,
      fieldOfStudy: input.fieldOfStudy,
      startDate: new Date(input.startDate),
      endDate: input.endDate ? new Date(input.endDate) : null,
      description: input.description,
      order: input.order ?? 0,
    });
  }

  async update(id: number, input: IEducationUpdateInput) {
    return this.educationRepository.update(id, {
      institution: input.institution,
      degree: input.degree,
      fieldOfStudy: input.fieldOfStudy,
      startDate: input.startDate ? new Date(input.startDate) : undefined,
      endDate: input.endDate ? new Date(input.endDate) : null,
      description: input.description,
      order: input.order,
    });
  }

  remove(id: number) {
    return this.educationRepository.remove(id);
  }
}