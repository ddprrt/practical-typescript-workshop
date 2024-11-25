// 1. Variadic tuple type
type Tuple<T extends unknown[]> = [...T];

// 2. Variadic tuple concatenation
function concat<T extends unknown[], U extends unknown[]>(
  arr1: T,
  arr2: U,
): [...T, ...U] {
  return [...arr1, ...arr2];
}

// 3. Type-safe zip function
function zip<T extends unknown[], U extends unknown[]>(
  arr1: T,
  arr2: U,
): { [K in keyof T]: [T[K], U[K]] } {
  return arr1.map((item, index) => [item, arr2[index]]) as any;
}

export {};
