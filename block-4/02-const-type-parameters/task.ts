// Type a function that creates an immutable tuple
// The function should infer literal types instead of wide types

function createTuple(items: unknown) {}

// This should have type [1, "hello", true]
const tuple1 = createTuple([1, "hello", true]);

// This should have type readonly ["x", "y", "z"]
const tuple2 = createTuple(["x", "y", "z"]);

export {};
