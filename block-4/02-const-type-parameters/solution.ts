function createTuple<const T extends readonly unknown[]>(items: T): T {
  return items;
}

// Type is [1, "hello", true]
const tuple1 = createTuple([1, "hello", true]);

// Type is readonly ["x", "y", "z"]
const tuple2 = createTuple(["x", "y", "z"]);

export {};
