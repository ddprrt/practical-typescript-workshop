import { success, error, Result } from "../03-generics/solution";

function safe(fn: Function, ...args: unknown[]): Result<unknown> {
  //@ts-ignore
  return null;
}

function unsafeDivide(a: number, b: number): number {
  if (b == 0) {
    throw new Error("Division by Zero!");
  }
  return a / b;
}

const result = safe(unsafeDivide, 10, 0);

export {};
