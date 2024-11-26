import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { TaskListComponent } from './task-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent],
  template: `
    <h1>Task Management System</h1>
    <app-task-list></app-task-list>
  `
})
export class App {}

bootstrapApplication(App);