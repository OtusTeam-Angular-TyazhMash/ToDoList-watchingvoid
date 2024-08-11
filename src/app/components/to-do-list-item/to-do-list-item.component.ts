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
  @Output() statusChange = new EventEmitter<string>();

  isEditing: boolean = false;
  newTitle: string = '';

  toggleCompletion(): void {
    this.toggle.emit(this.item.id);
  }

  deleteTodo(): void {
    this.delete.emit(this.item.id);
  }

  editItem(): void {
    this.isEditing = true;
    this.newTitle = this.item.title;
  }

  saveEdit(): void {
    if (this.newTitle.trim()) {
      this.item.title = this.newTitle;
      // Optionally, you can emit an update event or call a method to save the change
      this.isEditing = false;
    }
  }

  cancelEdit(): void {
    this.isEditing = false;
  }

  changeStatus(status: string): void {
    this.statusChange.emit(status);
  }
}
