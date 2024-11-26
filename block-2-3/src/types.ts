// Complex type hierarchy with unnecessary nesting
export type BaseEntity = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
};

export type UserRole = 'ADMIN' | 'USER' | 'GUEST';

export type UserPreferences = {
  theme: 'light' | 'dark';
  notifications: boolean;
  emailFrequency: 'daily' | 'weekly' | 'monthly';
};

export type UserProfile = BaseEntity & {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
  preferences: UserPreferences;
  metadata: Record<string, unknown>;
};

export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH';

export type Task = BaseEntity & {
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee: UserProfile;
  dueDate: Date;
  tags: string[];
  subtasks: Task[];
};