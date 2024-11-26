type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type ArrayElement<T> = T extends (infer U)[] ? U : never;

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type Fn = () => number;
type RtnFn = ReturnType<Fn>; // expected to be `number`

type Arr = [number, string];
type ArrElem = ArrayElement<Arr>; // expected to be `number | string`

type Obj = { a: number; b: string };
type NullableObj = Nullable<Obj>; // expected to be `{ a: number | null; b: string | null }

export {};
