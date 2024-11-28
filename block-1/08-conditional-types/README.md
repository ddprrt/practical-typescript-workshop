# Exercise 8: Conditional Types

Create a few helper types:

- `ReturnType` that takes a function type and returns the return type of that function.
- `ArrayElement` that takes an array type and returns the element type of that array.
- `Nullable` that takes an object type and makes all its properties nullable.


Examples:

```ts
type Fn = () => number;
type RtnFn = ReturnType<Fn>;  // expected to be `number`

type Arr = [number, string];
type ArrElem = ArrayElement<Arr>;  // expected to be `number | string`

type Obj = { a: number; b: string };
type NullableObj = Nullable<Obj>;  // expected to be `{ a: number | null; b: string | null }
```
