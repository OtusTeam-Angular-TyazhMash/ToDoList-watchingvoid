import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardRoutingModule } from './board-routing.module';
import { TaskBoardComponent } from './task-board/task-board.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    TaskBoardComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    TranslateModule
  ]
})
export class BoardModule { }
