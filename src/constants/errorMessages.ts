import { ErrorCode } from "../types/enums";

export const ErrorMessages: Record<ErrorCode, string> = {
  [ErrorCode.VALIDATION_ERROR]: "Validation failed",
  [ErrorCode.INVALID_CREDENTIALS]: "Invalid email or password",
  [ErrorCode.UNAUTHORIZED]: "No access token provided",
  [ErrorCode.INVALID_TOKEN]: "Invalid or expired token",
  [ErrorCode.NOT_FOUND]: "Resource not found",
  [ErrorCode.ROUTE_NOT_FOUND]: "Route not found",
  [ErrorCode.CONFLICT]: "Resource already exists",
  [ErrorCode.INTERNAL_ERROR]: "Internal server error",

  [ErrorCode.EDUCATION_LOAD_FAILED]: "Failed to load education records",
  [ErrorCode.EDUCATION_CREATE_FAILED]: "Failed to create education record",
  [ErrorCode.EDUCATION_UPDATE_FAILED]: "Failed to update education record",
  [ErrorCode.EDUCATION_DELETE_FAILED]: "Failed to delete education record",

  [ErrorCode.LICENSE_LOAD_FAILED]: "Failed to load licenses",
  [ErrorCode.LICENSE_CREATE_FAILED]: "Failed to create license",
  [ErrorCode.LICENSE_UPDATE_FAILED]: "Failed to update license",
  [ErrorCode.LICENSE_DELETE_FAILED]: "Failed to delete license",

  [ErrorCode.PROJECT_LOAD_FAILED]: "Failed to load projects",
  [ErrorCode.PROJECT_CREATE_FAILED]: "Failed to create project",
  [ErrorCode.PROJECT_UPDATE_FAILED]: "Failed to update project",
  [ErrorCode.PROJECT_DELETE_FAILED]: "Failed to delete project",

  [ErrorCode.ABOUT_LOAD_FAILED]: "Failed to load about section",
  [ErrorCode.ABOUT_SAVE_FAILED]: "Failed to save about section",

  [ErrorCode.CONTACT_MISSING_FIELDS]: "All fields are required",
  [ErrorCode.CONTACT_SEND_FAILED]: "Failed to send message",
  [ErrorCode.CONTACT_LOAD_FAILED]: "Failed to load messages",
  [ErrorCode.CONTACT_MARK_READ_FAILED]: "Failed to mark message as read",
  [ErrorCode.CONTACT_DELETE_FAILED]: "Failed to delete message",

  //** ZOD ERROR MESSAGE**/
  [ErrorCode.INVALID_EMAIL_FORMAT]: "Invalid email format",
  [ErrorCode.PASSWORD_REQUIRED]: "Password is required",
  [ErrorCode.INSTITUTION_REQUIRED]: "Institution is required",
  [ErrorCode.DEGREE_REQUIRED]: "Degree is required",
  [ErrorCode.START_DATE_REQUIRED]: "Start date is required",
  [ErrorCode.LICENSE_NAME_REQUIRED]: "Name is required",
  [ErrorCode.ISSUER_REQUIRED]: "Issuer is required",
  [ErrorCode.ISSUE_DATE_REQUIRED]: "Issue date is required",
  [ErrorCode.PROJECT_TITLE_REQUIRED]: "Title is required",
  [ErrorCode.DESCRIPTION_REQUIRED]: "Description is required",
  [ErrorCode.TECH_STACK_REQUIRED]: "Tech stack is required",
  [ErrorCode.FULL_NAME_REQUIRED]: "Full name is required",
  [ErrorCode.TITLE_REQUIRED]: "Title is required",
  [ErrorCode.BIO_REQUIRED]: "Bio is required",
  [ErrorCode.CONTACT_NAME_REQUIRED]: "Name is required",
  [ErrorCode.CONTACT_MESSAGE_REQUIRED]: "Message is required",

  [ErrorCode.TOO_MANY_REQUESTS]: "Too many requests, please try again later",
};
