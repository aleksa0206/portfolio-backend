import { Request, Response } from "express";
import { container } from "../container";
import { asyncHandler } from "../utils/asyncHandler";
import { ValidationError } from "../errors/AppError";
import { ErrorCode } from "../types/enums";

async function getAllMessagesHandler(req: Request, res: Response) {
  const messages = await container.contactService.getAll();
  res.json(messages);
}

async function submitMessageHandler(req: Request, res: Response) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    throw new ValidationError(ErrorCode.CONTACT_MISSING_FIELDS);
  }

  const newMessage = await container.contactService.submit(req.body);
  res
    .status(201)
    .json({ message: "Message sent successfully", data: newMessage });
}

async function markMessageAsReadHandler(req: Request, res: Response) {
  const { id } = req.params;
  const updated = await container.contactService.markAsRead(Number(id));
  res.json(updated);
}

async function deleteMessageHandler(req: Request, res: Response) {
  const { id } = req.params;
  await container.contactService.remove(Number(id));
  res.json({ message: "Message deleted" });
}

export const getAllMessages = asyncHandler(getAllMessagesHandler);
export const submitMessage = asyncHandler(submitMessageHandler);
export const markMessageAsRead = asyncHandler(markMessageAsReadHandler);
export const deleteMessage = asyncHandler(deleteMessageHandler);
