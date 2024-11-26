import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TaskListComponent } from "./components/task-list/task-list.component";
import { TaskCreateComponent } from "./components/task-create/task-create.component";

const routes: Routes = [
  { path: "", component: TaskListComponent },
  { path: "create", component: TaskCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
