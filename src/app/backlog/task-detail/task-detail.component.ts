import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/shared/service/todo.service';
import { ToastService } from 'src/app/shared/service/toast.service';

import { Todo } from 'src/app/shared/models/todo.model';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {
  task: Todo | undefined;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.todoService.getTodoById(id).subscribe({
      next: (task) => this.task = task,
      error: (err) => console.error('Error fetching task:', err)
    });
  }

  saveTask(): void {
    if (this.task && this.task.id !== undefined) {
      this.todoService.updateTodo(this.task.id, this.task).subscribe({
        next: () => {
          this.toastService.showToast('Task updated successfully!', 'success');
        },
        error: (err) => {
          console.error('Error updating task:', err);
          this.toastService.showToast('Failed to update task.', 'error');
        }
      });
    }
  }

  onStatusChange(): void {
    if (this.task && this.task.id !== undefined) {
      this.todoService.updateTodo(this.task.id, { completed: this.task.completed }).subscribe({
        next: () => {
          this.toastService.showToast('Status updated successfully!', 'info');
        },
        error: (err) => {
          console.error('Error updating status:', err);
          this.toastService.showToast('Failed to update status.', 'error');
        }
      });
    }
  }
}
