import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <div class="min-h-screen bg-gray-50">
      <nav class="bg-white shadow-sm">
        <div class="container mx-auto px-4 py-3">
          <div class="flex justify-between items-center">
            <a routerLink="/" class="text-xl font-semibold text-gray-800"
              >Task Management</a
            >
            <a
              routerLink="/create"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Create Task
            </a>
          </div>
        </div>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = "Task Management App";
}
