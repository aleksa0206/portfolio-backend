import { aboutRepository } from '../repositories/aboutRepository';
import { IAboutInput } from '../types/interfaces';

class AboutService {
    get() {
        return aboutRepository.find();
    }

    async save(input: IAboutInput) {
        return aboutRepository.upsert({
            fullName: input.fullName,
            title: input.title,
            bio: input.bio,
            photoUrl: input.photoUrl,
            email: input.email,
            phone: input.phone,
            location: input.location,
        });
    }
}

export const aboutService = new AboutService();
