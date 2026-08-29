import { LicenseRepository } from '../repositories/licenseRepository';
import { ILicenseInput, ILicenseUpdateInput } from '../types/interfaces';

export class LicenseService {
  constructor(private licenseRepository: LicenseRepository) {}

  getAll() {
    return this.licenseRepository.findAll();
  }

  async create(input: ILicenseInput) {
    return this.licenseRepository.create({
      name: input.name,
      issuer: input.issuer,
      issueDate: new Date(input.issueDate),
      expiryDate: input.expiryDate ? new Date(input.expiryDate) : null,
      credentialUrl: input.credentialUrl,
      order: input.order ?? 0,
    });
  }

  async update(id: number, input: ILicenseUpdateInput) {
    return this.licenseRepository.update(id, {
      name: input.name,
      issuer: input.issuer,
      issueDate: input.issueDate ? new Date(input.issueDate) : undefined,
      expiryDate: input.expiryDate ? new Date(input.expiryDate) : null,
      credentialUrl: input.credentialUrl,
      order: input.order,
    });
  }

  remove(id: number) {
    return this.licenseRepository.remove(id);
  }
}