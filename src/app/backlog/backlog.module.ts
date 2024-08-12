import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BacklogRoutingModule } from './backlog-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BacklogRoutingModule,
    ReactiveFormsModule
  ]
})
export class BacklogModule { }
