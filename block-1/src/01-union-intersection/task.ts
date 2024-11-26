// Implement these types and functions

// 1. Create a union type for different shapes
// e.g. Circle, Square, Rectangle
type Shape = unknown;

// 2. Create an intersection type for a user with multiple roles
// e.g. BasicUser as basic type, AdminRole, EditorRole as extended types
type User = unknown;

// 3. Implement a function that handles the Shape union
// Make sure to handle the default case
function calculateArea(shape: Shape): number {
  // Implement
  return 0;
}

// 4. Implement a function that works with the User intersection
function getUserPermissions(user: User): string[] {
  // Implement
  return [];
}

export {};
