import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() title: string = 'Default Title';
  @Input() color: string = 'primary'; // Это может быть цвет из вашей темы или кастомный цвет
  @Input() disabled: boolean = false;
}
