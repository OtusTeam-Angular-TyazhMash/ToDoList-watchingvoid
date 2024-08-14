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
  task: Todo | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskStateService: TaskStateService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.taskStateService.getTaskById(id).subscribe(task => {
      this.task = task;
    });
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
