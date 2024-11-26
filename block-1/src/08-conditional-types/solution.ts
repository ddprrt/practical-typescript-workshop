type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type ArrayElement<T> = T extends (infer U)[] ? U : never;

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export {};
