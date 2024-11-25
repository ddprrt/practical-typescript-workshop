// Implement variadic tuple type examples

// 1. Create a variadic tuple type
type Tuple<T extends unknown[]> = unknown;

// 2. Implement a function that works with variadic tuples
function concat<T extends unknown[], U extends unknown[]>(
  arr1: T,
  arr2: U,
): unknown[] {
  // Implement
  return [];
}

// 3. Create a type-safe zip function
function zip<T extends unknown[], U extends unknown[]>(
  arr1: T,
  arr2: U,
): unknown[] {
  // Implement
  return [];
}

export {};
