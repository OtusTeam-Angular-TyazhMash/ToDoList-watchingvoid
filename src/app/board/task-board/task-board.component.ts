import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/shared/service/task.service';
import { Todo } from 'src/app/shared/models/task.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {
  inProgressTasks: Todo[] = [];
  completedTasks: Todo[] = [];

  constructor(private todoService: TodoService, private translate: TranslateService) { } // Добавляем TranslateService

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(tasks => {
      this.inProgressTasks = tasks.filter(task => task.status === 'InProgress');
      this.completedTasks = tasks.filter(task => task.status === 'Completed');
    });
  }
}
