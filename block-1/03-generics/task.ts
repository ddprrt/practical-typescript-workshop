type ErrorT = unknown;
type Success<T> = unknown;

type Result<T> = ErrorT | Success<T>;

function success<T>(value: unknown): Success<T> {
  return 0;
}

function error(msg: unknown): ErrorT {
  return 0;
}

function handleResult<T>(result: Result<T>): T | null {
  // Implement
  return null;
}

// Test case
function divide(a: number, b: number): Result<number> {
  if (b === 0) {
    return error("Division by zero");
  }
  return success(a / b);
}

export {};
