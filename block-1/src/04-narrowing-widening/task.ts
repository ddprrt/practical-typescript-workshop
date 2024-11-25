// Implement type narrowing and widening examples

// 1. Implement type narrowing
function processValue(value: string | number): void {
  // Implement
}

// 2. Implement type widening
const x = "hello"; // Type is "hello"
// Make x accept any string

// 3. Implement control flow narrowing
type Result<T> =
  | { success: true; value: T }
  | { success: false; error: string };

function handleResult<T>(result: Result<T>): T | null {
  // Implement
  return null;
}
export {};
