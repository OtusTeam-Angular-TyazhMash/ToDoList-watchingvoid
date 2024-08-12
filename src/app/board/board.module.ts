import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardRoutingModule } from './board-routing.module';
import { TaskBoardComponent } from './task-board/task-board.component';

@NgModule({
  declarations: [
    TaskBoardComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }
