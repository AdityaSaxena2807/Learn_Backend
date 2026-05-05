class ApiError extends Error {
  constructor(
    message = "Something Went Wrong",
    statuscode,
    errors = [],
    stack = ""
  ) {
    super(message);
    this.code = statuscode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export default ApiError;