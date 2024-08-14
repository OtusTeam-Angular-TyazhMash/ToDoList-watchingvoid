import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskStateService } from 'src/app/shared/service/task-state.service';
import { Todo } from 'src/app/shared/models/task.model';
import { delay, first } from 'rxjs';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task: Todo | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskStateService: TaskStateService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log('Requested task ID:', id);
  
    if (id) {
      this.taskStateService.tasks$.pipe(
        first(),
        delay(100)  // Добавление небольшой задержки для проверки
      ).subscribe(tasks => {
        console.log('Received tasks after delay:', tasks);
        const task = tasks.find(task => task.id === id);
        if (task) {
          console.log('Task found:', task);
          this.task = task;
        } else {
          console.error(`Task with id ${id} not found.`);
        }
      });
    } else {
      console.error('No valid task id found in URL.');
    }
  }
  
  
  
  

  saveTask(): void {
    if (this.task && this.task.id !== undefined) {
      this.taskStateService.updateTask(this.task.id, this.task);
    }
  }

  onStatusChange(): void {
    if (this.task && this.task.id !== undefined) {
      this.taskStateService.updateTask(this.task.id, { completed: this.task.completed });
    }
  }
}
