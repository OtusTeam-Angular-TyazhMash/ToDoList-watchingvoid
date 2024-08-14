import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskStateService } from 'src/app/shared/service/task-state.service';
import { Todo } from 'src/app/shared/models/task.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  taskview: Todo | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskStateService: TaskStateService
  ) {}

  ngOnInit(): void {
    // Получаем id задачи из маршрута
    const id = +this.route.snapshot.paramMap.get('id')!;

    // Подписываемся на поток задач и находим нужную задачу по id
    this.taskStateService.tasks$.subscribe(tasks => {
      this.taskview = tasks.find(task => task.id == id);
      
      if (this.taskview) {
        console.log('Task found:', this.taskview);
      } else {
        console.error(`Task with id ${id} not found.`);
      }
    });
  }
  
  // Метод для сохранения изменений задачи
  saveTask(): void {
    if (this.taskview && this.taskview.id !== undefined) {
      this.taskStateService.updateTask(this.taskview.id, this.taskview);
    }
  }

  // Метод для изменения статуса задачи
  onStatusChange(): void {
    if (this.taskview && this.taskview.id !== undefined) {
      this.taskStateService.updateTask(this.taskview.id, { completed: this.taskview.completed });
    }
  }
}
