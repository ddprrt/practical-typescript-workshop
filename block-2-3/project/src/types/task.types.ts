import { v4 as uuidv4 } from "uuid";

export enum TaskPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH",
  CRITICAL = "CRITICAL",
}

export enum TaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  REVIEW = "REVIEW",
  DONE = "DONE",
  ARCHIVED = "ARCHIVED",
}

export interface TaskMetadata {
  createdAt?: string;
  updatedAt?: string;
  lastModifiedBy?: string;
  version?: number;
  revisionHistory?: TaskRevision[];
  tags?: string[];
  estimatedTime?: number;
  actualTime?: number;
  complexity?: number;
  impact?: number;
  costCenter?: string;
  departmentCode?: string;
}

export interface TaskRevision {
  id: string;
  timestamp: string;
  userId: string;
  changes: TaskChangeSet;
}

export interface TaskChangeSet {
  fieldName: string;
  oldValue: any;
  newValue: any;
}

export interface TaskAssignee {
  id: string;
  email: string;
  role: string;
  assignedAt: string;
  permissions: string[];
}

export interface Task extends TaskMetadata {
  id: string;
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  assignees: TaskAssignee[];
  parentTaskId?: string;
  subtasks: string[];
  dependencies: string[];
  attachments: TaskAttachment[];
  comments: TaskComment[];
}

export interface UpdateTask extends TaskMetadata {
  id?: string;
  title?: string;
  description?: string;
  priority?: TaskPriority;
  status?: TaskStatus;
  assignees?: TaskAssignee[];
  parentTaskId?: string;
  subtasks?: string[];
  dependencies?: string[];
  attachments?: TaskAttachment[];
  comments?: TaskComment[];
}

export interface CreateTask extends TaskMetadata {
  title: string;
  description: string;
  priority: TaskPriority;
  status: TaskStatus;
  assignees: TaskAssignee[];
  parentTaskId?: string;
  subtasks: string[];
  dependencies: string[];
  attachments: TaskAttachment[];
  comments: TaskComment[];
}

export interface TaskAttachment {
  id: string;
  filename: string;
  size: number;
  mimeType: string;
  uploadedAt: string;
  uploadedBy: string;
  url: string;
}

export interface TaskComment {
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  authorId: string;
  mentions: string[];
  reactions: TaskReaction[];
}

export interface TaskReaction {
  emoji: string;
  count: number;
  users: string[];
}

export class TaskBuilder {
  private task: Partial<Task> = {
    id: uuidv4(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    lastModifiedBy: "system",
    version: 1,
    revisionHistory: [],
    tags: [],
    complexity: 1,
    impact: 1,
    assignees: [],
    subtasks: [],
    dependencies: [],
    attachments: [],
    comments: [],
  };

  setTitle(title: string): TaskBuilder {
    this.task.title = title;
    return this;
  }

  setDescription(description: string): TaskBuilder {
    this.task.description = description;
    return this;
  }

  setPriority(priority: TaskPriority): TaskBuilder {
    this.task.priority = priority;
    return this;
  }

  setStatus(status: TaskStatus): TaskBuilder {
    this.task.status = status;
    return this;
  }

  build(): Task {
    if (
      !this.task.title ||
      !this.task.description ||
      !this.task.priority ||
      !this.task.status
    ) {
      throw new Error("Missing required task fields");
    }
    return this.task as Task;
  }
}
