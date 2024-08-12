import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/shared/service/todo.service';
import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss']
})
export class TaskBoardComponent implements OnInit {
  inProgressTasks: Todo[] = [];
  completedTasks: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(tasks => {
      this.inProgressTasks = tasks.filter(task => task.status === 'InProgress');
      this.completedTasks = tasks.filter(task => task.status === 'Completed');
    });
  }
}
