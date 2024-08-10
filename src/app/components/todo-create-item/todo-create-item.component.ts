import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-create-item',
  templateUrl: './todo-create-item.component.html',
  styleUrls: ['./todo-create-item.component.scss']
})
export class TodoCreateItemComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Output() save = new EventEmitter<void>();

  onSave() {
    this.save.emit();
  }
}
