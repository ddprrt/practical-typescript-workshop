import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Task, TaskPriority, TaskStatus, UserProfile } from './types';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // Overly complex state management
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  private selectedTaskSubject = new BehaviorSubject<Task | null>(null);

  // Type assertion abuse
  private mockUser: UserProfile = {
    id: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    role: 'USER',
    preferences: {
      theme: 'light',
      notifications: true,
      emailFrequency: 'daily'
    },
    metadata: {}
  };

  // Unnecessarily complex method signatures
  public getFilteredTasks(
    status?: TaskStatus,
    priority?: TaskPriority,
    assigneeId?: number
  ): Observable<Task[]> {
    return this.tasksSubject.pipe(
      map(tasks => {
        let filteredTasks = [...tasks];

        if (status) {
          filteredTasks = filteredTasks.filter(task => task.status === status);
        }

        if (priority) {
          filteredTasks = filteredTasks.filter(task => task.priority === priority);
        }

        if (assigneeId) {
          filteredTasks = filteredTasks.filter(task => task.assignee.id === assigneeId);
        }

        return filteredTasks;
      })
    );
  }

  // Method with too many responsibilities
  public async createTaskWithSubtasks(
    taskData: Partial<Task>,
    subtaskTitles: string[]
  ): Promise<Task> {
    const newTask: Task = {
      id: Math.random(),
      createdAt: new Date(),
      updatedAt: new Date(),
      title: taskData.title || '',
      description: taskData.description || '',
      status: taskData.status || 'TODO',
      priority: taskData.priority || 'MEDIUM',
      assignee: taskData.assignee || this.mockUser,
      dueDate: taskData.dueDate || new Date(),
      tags: taskData.tags || [],
      subtasks: []
    };

    const subtasks: Task[] = subtaskTitles.map(title => ({
      ...newTask,
      id: Math.random(),
      title,
      description: `Subtask for ${newTask.title}`,
      subtasks: []
    }));

    newTask.subtasks = subtasks;

    const currentTasks = this.tasksSubject.value;
    this.tasksSubject.next([...currentTasks, newTask]);

    return newTask;
  }
}
