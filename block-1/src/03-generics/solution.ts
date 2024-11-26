export type ErrorT = { message: string; success: false };
export type Success<T> = { value: T; success: true };

export type Result<T> = ErrorT | Success<T>;

export function success<T>(value: T): Success<T> {
  return { value, success: true };
}

export function error(msg: string): ErrorT {
  return { message: msg, success: false };
}

function handleResult<T>(result: Result<T>): T | null {
  if (result.success) {
    return result.value;
  }
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
