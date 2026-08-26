import { Request, Response } from 'express';
import { projectService } from '../services/projectService';

export async function getAllProjects(req: Request, res: Response) {
    try {
        const projects = await projectService.getAll();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Greška pri učitavanju projekata' });
    }
}

export async function createProject(req: Request, res: Response) {
    try {
        const newProject = await projectService.create(req.body);
        res.status(201).json(newProject);
    } catch (error) {
        res.status(500).json({ message: 'Greška pri kreiranju projekta' });
    }
}

export async function updateProject(req: Request, res: Response) {
    try {
        const { id } = req.params;
        const updated = await projectService.update(Number(id), req.body);
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: 'Greška pri izmeni projekta' });
    }
}

export async function deleteProject(req: Request, res: Response) {
    try {
        const { id } = req.params;
        await projectService.remove(Number(id));
        res.json({ message: 'Projekat obrisan' });
    } catch (error) {
        res.status(500).json({ message: 'Greška pri brisanju projekta' });
    }
}
