import { ErrorCode } from '../types/enums';

export const ErrorMessages: Record<ErrorCode, string> = {
  [ErrorCode.VALIDATION_ERROR]: 'Validation failed',
  [ErrorCode.INVALID_CREDENTIALS]: 'Invalid email or password',
  [ErrorCode.UNAUTHORIZED]: 'No access token provided',
  [ErrorCode.INVALID_TOKEN]: 'Invalid or expired token',
  [ErrorCode.NOT_FOUND]: 'Resource not found',
  [ErrorCode.ROUTE_NOT_FOUND]: 'Route not found',
  [ErrorCode.CONFLICT]: 'Resource already exists',
  [ErrorCode.INTERNAL_ERROR]: 'Internal server error',

  [ErrorCode.EDUCATION_LOAD_FAILED]: 'Failed to load education records',
  [ErrorCode.EDUCATION_CREATE_FAILED]: 'Failed to create education record',
  [ErrorCode.EDUCATION_UPDATE_FAILED]: 'Failed to update education record',
  [ErrorCode.EDUCATION_DELETE_FAILED]: 'Failed to delete education record',

  [ErrorCode.LICENSE_LOAD_FAILED]: 'Failed to load licenses',
  [ErrorCode.LICENSE_CREATE_FAILED]: 'Failed to create license',
  [ErrorCode.LICENSE_UPDATE_FAILED]: 'Failed to update license',
  [ErrorCode.LICENSE_DELETE_FAILED]: 'Failed to delete license',

  [ErrorCode.PROJECT_LOAD_FAILED]: 'Failed to load projects',
  [ErrorCode.PROJECT_CREATE_FAILED]: 'Failed to create project',
  [ErrorCode.PROJECT_UPDATE_FAILED]: 'Failed to update project',
  [ErrorCode.PROJECT_DELETE_FAILED]: 'Failed to delete project',

  [ErrorCode.ABOUT_LOAD_FAILED]: 'Failed to load about section',
  [ErrorCode.ABOUT_SAVE_FAILED]: 'Failed to save about section',

  [ErrorCode.CONTACT_MISSING_FIELDS]: 'All fields are required',
  [ErrorCode.CONTACT_SEND_FAILED]: 'Failed to send message',
  [ErrorCode.CONTACT_LOAD_FAILED]: 'Failed to load messages',
  [ErrorCode.CONTACT_MARK_READ_FAILED]: 'Failed to mark message as read',
  [ErrorCode.CONTACT_DELETE_FAILED]: 'Failed to delete message',
};