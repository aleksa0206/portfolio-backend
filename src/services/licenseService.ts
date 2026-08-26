import { licenseRepository } from '../repositories/licenseRepository';
import {
    ILicenseInput,
    ILicenseUpdateInput,
} from '../types/interfaces';

class LicenseService {
    getAll() {
        return licenseRepository.findAll();
    }

    async create(input: ILicenseInput) {
        return licenseRepository.create({
            name: input.name,
            issuer: input.issuer,
            issueDate: new Date(input.issueDate),
            expiryDate: input.expiryDate ? new Date(input.expiryDate) : null,
            credentialUrl: input.credentialUrl,
            order: input.order ?? 0,
        });
    }

    async update(id: number, input: ILicenseUpdateInput) {
        return licenseRepository.update(id, {
            name: input.name,
            issuer: input.issuer,
            issueDate: input.issueDate ? new Date(input.issueDate) : undefined,
            expiryDate: input.expiryDate ? new Date(input.expiryDate) : null,
            credentialUrl: input.credentialUrl,
            order: input.order,
        });
    }

    remove(id: number) {
        return licenseRepository.remove(id);
    }
}

export const licenseService = new LicenseService();
