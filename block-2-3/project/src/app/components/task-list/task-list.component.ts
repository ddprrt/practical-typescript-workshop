import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { TaskService } from "../../services/task.service";
import { Task, TaskPriority, TaskStatus } from "../../../types/task.types";
import { Observable } from "rxjs";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
})
export class TaskListComponent implements OnInit {
  tasks$: Observable<Task[]> = new Observable();
  filterForm: FormGroup;
  taskPriorities = Object.values(TaskPriority);
  taskStatuses = Object.values(TaskStatus);

  constructor(
    private taskService: TaskService,
    private fb: FormBuilder,
  ) {
    this.filterForm = this.fb.group({
      status: [""],
      priority: [""],
      search: [""],
    });
  }

  ngOnInit(): void {
    this.tasks$ = this.taskService.getTasks();

    this.filterForm.valueChanges.subscribe((filters) => {
      this.tasks$ = this.taskService.getTasks({
        status: filters.status,
        priority: filters.priority,
        search: filters.search,
      });
    });
  }

  async updateTaskStatus(task: Task, event: Event): Promise<void> {
    const select = event.target as HTMLSelectElement;
    await this.taskService.updateTask(task.id, {
      status: select.value as TaskStatus,
    });
  }

  async updateTaskPriority(task: Task, event: Event): Promise<void> {
    const select = event.target as HTMLSelectElement;
    await this.taskService.updateTask(task.id, {
      priority: select.value as TaskPriority,
    });
  }

  async deleteTask(taskId: string): Promise<void> {
    await this.taskService.deleteTask(taskId);
  }
}
