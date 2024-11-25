// 1. Shape union type
type Circle = {
  kind: "circle";
  radius: number;
};

type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

// 2. User intersection type
type BasicUser = {
  id: string;
  name: string;
};

type AdminRole = {
  isAdmin: true;
  adminPermissions: string[];
};

type EditorRole = {
  isEditor: true;
  editableCategories: string[];
};

type User = BasicUser & (AdminRole | EditorRole);

// 3. Shape handler
function calculateArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}

export {};
