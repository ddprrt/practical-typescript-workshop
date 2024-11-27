import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { ApiClient, TaskFilter } from "../../sdk/api-client";
import {
  CreateTask,
  Task,
  TaskPriority,
  TaskStatus,
  UpdateTask,
} from "../../types/task.types";
import { FetchClient } from "../../sdk/http/fetch-client";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  private apiClient: ApiClient;

  constructor() {
    this.apiClient = new ApiClient(new FetchClient());
    this.loadTasks();
  }

  private async loadTasks(filter?: TaskFilter): Promise<void> {
    try {
      const tasks = await this.apiClient.getTasks(filter);
      this.tasksSubject.next(tasks);
    } catch (error) {
      console.error("Error loading tasks:", error);
      throw error;
    }
  }

  getTasks(filter?: TaskFilter): Observable<Task[]> {
    this.loadTasks(filter);
    return this.tasksSubject.asObservable();
  }

  async createTask(task: CreateTask): Promise<Task> {
    const createdTask = await this.apiClient.createTask(task);
    await this.loadTasks();
    return createdTask;
  }

  async updateTask(id: string, updates: UpdateTask): Promise<Task> {
    const updatedTask = await this.apiClient.updateTask(id, updates);
    await this.loadTasks();
    return updatedTask;
  }

  async deleteTask(id: string): Promise<void> {
    await this.apiClient.deleteTask(id);
    await this.loadTasks();
  }
}
