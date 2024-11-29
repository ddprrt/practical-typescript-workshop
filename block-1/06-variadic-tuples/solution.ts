// Variadic tuple concatenation
function concat<T extends unknown[], U extends unknown[]>(
  arr1: readonly [...T],
  arr2: readonly [...U],
): [...T, ...U] {
  return [...arr1, ...arr2];
}

const arr = concat([1, 2], [3, 4]); // expected to be [number, number, number, number ]

export {};
