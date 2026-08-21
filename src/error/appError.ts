interface Details {
  field: string;
  message: string;
}

interface AppErrorOptions {
  status: number;
  code: string;
  details?: Details[] | undefined;
}

export class AppError extends Error {
  public readonly status: number;
  public readonly code: string;
  public readonly details?: Details[] | undefined;

  constructor(
    message: string,
    { status = 500, code = "INTERNAL_ERROR", details }: AppErrorOptions,
  ) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.code = code;
    this.details = details;
  }
}

export class BadRequestError extends AppError {
  constructor(message = "Bad Request", details?: Details[]) {
    super(message, {
      status: 400,
      code: "BAD_REQUEST",
      details,
    });
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "Authentication is required", details?: Details[]) {
    super(message, {
      status: 401,
      code: "UNAUTHORIZED",
      details,
    });
  }
}

export class ForbiddenError extends AppError {
  constructor(
    message = "You do not have permission to perform this action",
    details?: Details[],
  ) {
    super(message, {
      status: 403,
      code: "FORBIDDEN",
      details,
    });
  }
}

export class NotFoundError extends AppError {
  constructor(message = "Resource not found", details?: Details[]) {
    super(message, {
      status: 404,
      code: "NOT_FOUND",
      details,
    });
  }
}

export class ConflictError extends AppError {
  constructor(message = "Resource conflict", details?: Details[]) {
    super(message, {
      status: 409,
      code: "CONFLICT",
      details,
    });
  }
}

export class ValidationError extends AppError {
  constructor(message = "Validation failed", details?: Details[]) {
    super(message, {
      status: 422,
      code: "VALIDATION_ERROR",
      details,
    });
  }
}

export class TooManyRequestsError extends AppError {
  constructor(message = "Too many requests", details?: Details[]) {
    super(message, {
      status: 429,
      code: "TOO_MANY_REQUESTS",
      details,
    });
  }
}

export class BadGatewayError extends AppError {
  constructor(message = "Bad gateway", details?: Details[]) {
    super(message, {
      status: 502,
      code: "BAD_GATEWAY",
      details,
    });
  }
}

export class ServiceUnavailableError extends AppError {
  constructor(
    message = "Service temporarily unavailable",
    details?: Details[],
  ) {
    super(message, {
      status: 503,
      code: "SERVICE_UNAVAILABLE",
      details,
    });
  }
}
