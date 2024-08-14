import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/shared/service/todo.service';
import { Todo } from 'src/app/shared/models/todo.model';
import { TaskFilter } from 'src/app/shared/models/filter.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Todo[] = [];
  filteredTasks: Todo[] = [];
  filter: TaskFilter = { status: '' }; // Изначально показываем все задачи

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(tasks => {
      this.tasks = tasks;
      this.applyFilter(); // Применяем фильтр при первой загрузке
    });
  }

  selectTask(id: number): void {
    this.router.navigate(['/backlog', id]);
  }

  // Метод для применения фильтра
  applyFilter(): void {
    if (this.filter.status) {
      this.filteredTasks = this.tasks.filter(task => task.status === this.filter.status);
    } else {
      this.filteredTasks = this.tasks;
    }
  }
}
