import { Request, Response } from "express";
import { container } from "../container";
import { asyncHandler } from "../utils/asyncHandler";
import { NotFoundError } from "../errors/AppError";
import { ErrorCode } from "../types/enums";

async function getAllProjectsHandler(req: Request, res: Response) {
  const projects = await container.projectService.getAll();
  res.json(projects);
}

async function createProjectHandler(req: Request, res: Response) {
  const newProject = await container.projectService.create(req.body);
  res.status(201).json(newProject);
}

async function updateProjectHandler(req: Request, res: Response) {
  const { id } = req.params;
  const updated = await container.projectService.update(Number(id), req.body);
  if (!updated) {
    throw new NotFoundError(ErrorCode.PROJECT_UPDATE_FAILED);
  }
  res.json(updated);
}

async function deleteProjectHandler(req: Request, res: Response) {
  const { id } = req.params;
  await container.projectService.remove(Number(id));
  res.json({ message: "Project deleted" });
}

export const getAllProjects = asyncHandler(getAllProjectsHandler);
export const createProject = asyncHandler(createProjectHandler);
export const updateProject = asyncHandler(updateProjectHandler);
export const deleteProject = asyncHandler(deleteProjectHandler);
