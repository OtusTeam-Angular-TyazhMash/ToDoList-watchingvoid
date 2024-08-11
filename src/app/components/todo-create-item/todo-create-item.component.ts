import { Component, EventEmitter, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-todo-create-item',
  templateUrl: './todo-create-item.component.html',
  styleUrls: ['./todo-create-item.component.scss']
})
export class TodoCreateItemComponent {
  newTodoTitle: string = '';
  newItemDescription: string = '';

  @Output() add = new EventEmitter<{ title: string, description: string }>();

  addTodo() {
    if (this.newTodoTitle.trim()) {
      this.add.emit({ title: this.newTodoTitle, description: this.newItemDescription });
      this.newTodoTitle = '';
      this.newItemDescription = '';
    }
  }
  onSubmit(): void {
    // Логика для обработки отправки формы
    console.log('Title:', this.newTodoTitle);
    console.log('Description:', this.newItemDescription);

    // Очистить поля формы после отправки
    this.newTodoTitle = '';
    this.newItemDescription = '';
  }
}
