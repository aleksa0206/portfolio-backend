import prisma from '../config/db';
import { EducationRepository } from '../repositories/educationRepository';
import { EducationService } from '../services/educationService';
import { LicenseRepository } from '../repositories/licenseRepository';
import { LicenseService } from '../services/licenseService';
import { ProjectRepository } from '../repositories/projectRepository';
import { ProjectService } from '../services/projectService';
import { AboutRepository } from '../repositories/aboutRepository';
import { AboutService } from '../services/aboutService';
import { ContactRepository } from '../repositories/contactRepository';
import { ContactService } from '../services/contactService';

class Container {
  private static instance: Container;

  public educationRepository: EducationRepository;
  public educationService: EducationService;

  public licenseRepository: LicenseRepository;
  public licenseService: LicenseService;

  public projectRepository: ProjectRepository;
  public projectService: ProjectService;

  public aboutRepository: AboutRepository;
  public aboutService: AboutService;

  public contactRepository: ContactRepository;
  public contactService: ContactService;

  private constructor() {
    this.educationRepository = new EducationRepository(prisma);
    this.educationService = new EducationService(this.educationRepository);

    this.licenseRepository = new LicenseRepository(prisma);
    this.licenseService = new LicenseService(this.licenseRepository);

    this.projectRepository = new ProjectRepository(prisma);
    this.projectService = new ProjectService(this.projectRepository);

    this.aboutRepository = new AboutRepository(prisma);
    this.aboutService = new AboutService(this.aboutRepository);

    this.contactRepository = new ContactRepository(prisma);
    this.contactService = new ContactService(this.contactRepository);
  }

  public static getInstance(): Container {
    if (!Container.instance) {
      Container.instance = new Container();
    }
    return Container.instance;
  }
}

export const container = Container.getInstance();