import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskStateService } from 'src/app/shared/service/task-state.service';
import { Todo } from 'src/app/shared/models/task.model';
import { TranslateService } from '@ngx-translate/core';  // Импортируем TranslateService

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: Todo[] = [];

  constructor(
    private taskStateService: TaskStateService,
    private router: Router,
    private translate: TranslateService  // Добавляем TranslateService
  ) { }

  ngOnInit(): void {
    this.taskStateService.tasks$.subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  applyFilter(eventOrValue: Event | string): void {
    let filterValue: string;

    if (typeof eventOrValue === 'string') {
      filterValue = eventOrValue;
    } else {
      filterValue = (eventOrValue.target as HTMLSelectElement).value;
    }

    this.taskStateService.setFilter(filterValue);
  }

  selectTask(id: number): void {
    this.router.navigate(['/backlog', id]);
  }
}
