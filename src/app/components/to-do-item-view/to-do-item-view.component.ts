import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../shared/service/todo.service';

@Component({
  selector: 'app-to-do-item-view',
  templateUrl: './to-do-item-view.component.html',
  styleUrls: ['./to-do-item-view.component.scss']
})
export class ToDoItemViewComponent implements OnInit {
  @Input() todo: any; // Используйте правильный тип, если у вас есть интерфейс Todo

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // Safely get 'id' and ensure it's a number
      const idStr = params.get('id');
      const id = idStr ? +idStr : null; // Convert to number or null if not present

      if (id) {
        this.todoService.getTodoById(id).subscribe(todo => {
          this.todo = todo;
        });
      }
    });
  }
  onStatusChange(): void {
    if (this.todo) {
      this.todoService.updateTodo(this.todo.id, { completed: this.todo.completed })
        .subscribe(() => {
          console.log('Todo status updated');
        });
    }
  }
}
