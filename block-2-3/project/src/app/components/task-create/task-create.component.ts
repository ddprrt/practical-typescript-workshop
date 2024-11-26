import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { TaskService } from "../../services/task.service";
import {
  TaskPriority,
  TaskStatus,
  TaskBuilder,
} from "../../../types/task.types";

@Component({
  selector: "app-task-create",
  templateUrl: "./task-create.component.html",
})
export class TaskCreateComponent {
  taskForm: FormGroup;
  taskPriorities = Object.values(TaskPriority);
  taskStatuses = Object.values(TaskStatus);

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private router: Router,
  ) {
    this.taskForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(3)]],
      description: ["", [Validators.required, Validators.minLength(10)]],
      priority: [TaskPriority.MEDIUM, Validators.required],
      status: [TaskStatus.TODO, Validators.required],
    });
  }

  async onSubmit(): Promise<void> {
    if (this.taskForm.valid) {
      try {
        const task = new TaskBuilder()
          .setTitle(this.taskForm.value.title)
          .setDescription(this.taskForm.value.description)
          .setPriority(this.taskForm.value.priority as TaskPriority)
          .setStatus(this.taskForm.value.status as TaskStatus)
          .build();

        await this.taskService.createTask(task);
        this.router.navigate(["/"]);
      } catch (error) {
        console.error("Error creating task:", error);
      }
    }
  }
}
