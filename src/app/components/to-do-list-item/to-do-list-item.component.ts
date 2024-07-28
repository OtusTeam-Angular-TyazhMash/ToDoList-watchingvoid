import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.scss']
})
export class ToDoListItemComponent {
  @Input() item: any;
  @Output() delete = new EventEmitter<number>();
  @Output() toggle = new EventEmitter<number>();

  toggleCompletion(): void {
    this.toggle.emit(this.item.id);
  }

  deleteTodo(): void {
    this.delete.emit(this.item.id);
  }
}
