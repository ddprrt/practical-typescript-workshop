# Example 1: Union and Intersection Types

Task: Create a `Shape` type that can be either a `Circle` or a `Square` with a function `calculateArea` that returns the area of the shape.

Criteria:
- Use a union type for the `Shape` type
- Use literal types for the `type` or `kind` field of each shape
- Use the `assertNever` technique to ensure you've exhausted all possible types in a switch statement
