import { Task, TaskPriority, TaskStatus } from "../types/task.types";
import { Client } from "./http/client.interface";
import { FetchClient } from "./http/fetch-client";

export class ApiError extends Error {
  constructor(
    public statusCode: number,
    public code: string,
    message: string,
    public details?: any,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

export class NetworkError extends Error {
  constructor(
    message: string,
    public originalError: Error,
  ) {
    super(message);
    this.name = "NetworkError";
  }
}

export class ValidationError extends ApiError {
  constructor(
    message: string,
    public validationErrors: Record<string, string[]>,
  ) {
    super(400, "VALIDATION_ERROR", message, validationErrors);
    this.name = "ValidationError";
  }
}

export interface ApiResponse<T> {
  data: T;
  metadata: {
    timestamp: string;
    requestId: string;
  };
}

export interface ApiErrorResponse {
  error: {
    code: string;
    message: string;
    details?: any;
  };
  metadata: {
    timestamp: string;
    requestId: string;
  };
}

export interface TaskFilter {
  status?: TaskStatus;
  priority?: TaskPriority;
  assigneeId?: string;
  search?: string;
}

export class ApiClient {
  constructor(
    private readonly httpClient: Client = new FetchClient(),
    private readonly baseUrl: string = "http://localhost:3000",
  ) {}

  private async handleResponse<T>(
    response: ApiResponse<T> | ApiErrorResponse,
  ): Promise<T> {
    if ("error" in response) {
      const errorData = response as ApiErrorResponse;

      if (errorData.error.code === "VALIDATION_ERROR") {
        throw new ValidationError(
          errorData.error.message,
          errorData.error.details,
        );
      }

      throw new ApiError(
        400,
        errorData.error.code,
        errorData.error.message,
        errorData.error.details,
      );
    }

    return (response as ApiResponse<T>).data;
  }

  private async makeRequest<T>(
    path: string,
    options: { method?: string; body?: any } = {},
  ): Promise<T> {
    try {
      const url = `${this.baseUrl}${path}`;
      const requestOptions = {
        method: options.method || "GET",
        body: options.body ? JSON.stringify(options.body) : undefined,
      };

      const response = await this.httpClient.request<
        ApiResponse<T> | ApiErrorResponse
      >(url, requestOptions);

      return this.handleResponse<T>(response);
    } catch (error) {
      if (error instanceof ApiError) {
        throw error;
      }
      throw new NetworkError("Network request failed", error as Error);
    }
  }

  async getTasks(filter?: TaskFilter): Promise<Task[]> {
    const queryParams = new URLSearchParams();
    if (filter) {
      Object.entries(filter).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });
    }
    const path = `/tasks${queryParams.toString() ? "?" + queryParams.toString() : ""}`;
    return this.makeRequest<Task[]>(path);
  }

  async getTask(id: string): Promise<Task> {
    return this.makeRequest<Task>(`/tasks/${id}`);
  }

  async createTask(task: Omit<Task, "id">): Promise<Task> {
    return this.makeRequest<Task>("/tasks", {
      method: "POST",
      body: task,
    });
  }

  async updateTask(id: string, task: Partial<Task>): Promise<Task> {
    return this.makeRequest<Task>(`/tasks/${id}`, {
      method: "PATCH",
      body: task,
    });
  }

  async deleteTask(id: string): Promise<void> {
    return this.makeRequest<void>(`/tasks/${id}`, {
      method: "DELETE",
    });
  }
}
