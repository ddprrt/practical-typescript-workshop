// 1. Return type extractor
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// 2. Array element type extractor
type ArrayElement<T> = T extends (infer U)[] ? U : never;

// 3. Nullable properties
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

// 4. Conditional type function
function processValue<T>(
  value: T,
): T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : never {
  return value as any;
}

export {};
