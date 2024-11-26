import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from './task.service';
import { Task, TaskPriority, TaskStatus } from './types';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="task-list">
      <h2>Task Management</h2>
      
      <div class="filters">
        <select #statusFilter (change)="filterTasks(statusFilter.value, priorityFilter.value)">
          <option value="">All Statuses</option>
          <option value="TODO">Todo</option>
          <option value="IN_PROGRESS">In Progress</option>
          <option value="DONE">Done</option>
        </select>

        <select #priorityFilter (change)="filterTasks(statusFilter.value, priorityFilter.value)">
          <option value="">All Priorities</option>
          <option value="LOW">Low</option>
          <option value="MEDIUM">Medium</option>
          <option value="HIGH">High</option>
        </select>
      </div>

      <button (click)="createSampleTask()">Create Sample Task</button>

      <div class="tasks">
        <div *ngFor="let task of tasks" class="task-card">
          <h3>{{ task.title }}</h3>
          <p>{{ task.description }}</p>
          <div class="task-meta">
            <span [class]="'status-' + task.status.toLowerCase()">{{ task.status }}</span>
            <span [class]="'priority-' + task.priority.toLowerCase()">{{ task.priority }}</span>
          </div>
          <div *ngIf="task.subtasks.length" class="subtasks">
            <h4>Subtasks:</h4>
            <ul>
              <li *ngFor="let subtask of task.subtasks">
                {{ subtask.title }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .task-list {
      padding: 20px;
    }
    .filters {
      margin: 20px 0;
    }
    .task-card {
      border: 1px solid #ccc;
      padding: 15px;
      margin: 10px 0;
      border-radius: 4px;
    }
    .task-meta {
      margin-top: 10px;
    }
    .status-todo { color: orange; }
    .status-in_progress { color: blue; }
    .status-done { color: green; }
    .priority-high { color: red; }
    .priority-medium { color: orange; }
    .priority-low { color: green; }
  `]
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.getFilteredTasks().subscribe(
      tasks => this.tasks = tasks
    );
  }

  filterTasks(status: string, priority: string) {
    this.taskService.getFilteredTasks(
      status as TaskStatus || undefined,
      priority as TaskPriority || undefined
    ).subscribe(
      tasks => this.tasks = tasks
    );
  }

  createSampleTask() {
    this.taskService.createTaskWithSubtasks(
      {
        title: 'New Complex Task',
        description: 'This is a sample task with subtasks',
        priority: 'HIGH',
        dueDate: new Date(Date.now() + 86400000)
      },
      ['Subtask 1', 'Subtask 2', 'Subtask 3']
    );
  }
}