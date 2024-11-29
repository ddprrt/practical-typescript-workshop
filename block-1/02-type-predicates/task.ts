// User intersection type
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

// userPermission
function getUserPermissions(user: User): string[] {
  if ("isAdmin" in user && user.isAdmin) {
    return user.adminPermissions;
  } else if ("isEditor" in user && user.isEditor) {
    return user.editableCategories;
  }
  return [];
}

export {};
