import { educationRepository } from '../repositories/educationRepository';
import {
    IEducationInput,
    IEducationUpdateInput
} from '../types/interfaces';

class EducationService {
    getAll() {
        return educationRepository.findAll();
    }

    async create(input: IEducationInput) {
        return educationRepository.create({
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
        return educationRepository.update(id, {
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
        return educationRepository.remove(id);
    }
}

export const educationService = new EducationService();
