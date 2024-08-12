import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/shared/service/todo.service';
import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Todo[] = [];

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  selectTask(id: number): void {
    this.router.navigate(['/backlog', id]);
  }
}
