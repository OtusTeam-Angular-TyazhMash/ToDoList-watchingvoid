import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title:string | null = null;          // Получениее название кнопки
  @Input() type: string | null = null;          // Получение типа кнопки для применения стилей
  @Input() disabled:boolean | null = null;      // Проверка введено ли число

  @Output() click = new EventEmitter<void>();

  onClick(){
    this.click.emit();
  }

  getClass() {
    if(this.title == 'Add Task') return 'button--add'
    if(this.title == 'Delete') return 'button--delete'
    return ''
  }
}
