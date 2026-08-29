import { ErrorCode } from '../types/enums';
import { ErrorMessages } from '../constants/errorMessages';

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: ErrorCode;
  public readonly isOperational: boolean;

  constructor(code: ErrorCode, statusCode: number, customMessage?: string) {
    super(customMessage ?? ErrorMessages[code]);
    this.statusCode = statusCode;
    this.code = code;
    this.isOperational = true;
    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export class ValidationError extends AppError {
  constructor(code: ErrorCode = ErrorCode.VALIDATION_ERROR, customMessage?: string) {
    super(code, 400, customMessage);
  }
}

export class AuthenticationError extends AppError {
  constructor(code: ErrorCode = ErrorCode.INVALID_CREDENTIALS, customMessage?: string) {
    super(code, 401, customMessage);
  }
}

export class UnauthorizedError extends AppError {
  constructor(code: ErrorCode = ErrorCode.UNAUTHORIZED, customMessage?: string) {
    super(code, 401, customMessage);
  }
}

export class NotFoundError extends AppError {
  constructor(code: ErrorCode = ErrorCode.NOT_FOUND, customMessage?: string) {
    super(code, 404, customMessage);
  }
}

export class ConflictError extends AppError {
  constructor(code: ErrorCode = ErrorCode.CONFLICT, customMessage?: string) {
    super(code, 409, customMessage);
  }
}