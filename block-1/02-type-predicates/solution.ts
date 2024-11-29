// User intersection type
type BasicUser = {
  id: string;
  name: string;
};

type AdminRole = BasicUser & {
  role: "admin";
  adminPermissions: string[];
};

type EditorRole = BasicUser & {
  role: "editor";
  editableCategories: string[];
};

type User = AdminRole | EditorRole;

function isAdmin(user: User): user is AdminRole {
  return user.role === "admin";
}

// userPermission
function getUserPermissions(user: User): string[] {
  if (isAdmin(user)) {
    return user.adminPermissions;
  } else {
    return user.editableCategories;
  }
}

export {};
