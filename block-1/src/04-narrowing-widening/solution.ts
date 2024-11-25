// 1. Type narrowing
function processValue(value: string | number): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // value is narrowed to string
  } else {
    console.log(value.toFixed(2)); // value is narrowed to number
  }
}

// 2. Type widening
let x = "hello" as string; // Widened to string type

// 3. Control flow narrowing
type Result<T> =
  | { success: true; value: T }
  | { success: false; error: string };

function handleResult<T>(result: Result<T>): T | null {
  if (result.success) {
    return result.value; // TypeScript knows this exists
  } else {
    console.error(result.error); // TypeScript knows this exists
    return null;
  }
}

export {};
