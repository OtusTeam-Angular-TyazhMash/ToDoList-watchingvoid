import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss'],
})
export class ToDoListItemComponent {
  @Input() item: any;
  @Input() isEditing: boolean = false; // Добавлено для редактирования
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();
  @Output() save = new EventEmitter<void>(); // Добавлено для сохранения изменений

  toggleCompletion(): void {
    this.toggle.emit(this.item.id);
  }

  deleteTodo(): void {
    this.delete.emit(this.item.id);
  }

  saveEdit(): void {
    this.save.emit();
    this.isEditing = false; // Закрыть режим редактирования после сохранения
  }
}
