import { success, error, Result } from "../03-generics/solution";

function safe<Args extends unknown[], R>(
  fn: (...args: Args) => R,
  ...args: Args
): Result<R> {
  try {
    return success(fn(...args));
  } catch (e: any) {
    return error("Error: " + e?.message);
  }
}

function unsafeDivide(a: number, b: number): number {
  if (b == 0) {
    throw new Error("Division by Zero!");
  }
  return a / b;
}

const result = safe(unsafeDivide, 10, 0);
