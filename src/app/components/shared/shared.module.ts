import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TooltipDirective } from './tooltip.directive';
import { ToastsComponent } from './toasts/toasts.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { FilterTodosPipe } from '../filter-todos.pipe';

@NgModule({
  declarations: [
    ButtonComponent,
    TooltipDirective,
    ToastsComponent,
    LoadingSpinnerComponent,
    FilterTodosPipe,
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    ToastsComponent,
    TooltipDirective
  ]
})
export class SharedModule { }
