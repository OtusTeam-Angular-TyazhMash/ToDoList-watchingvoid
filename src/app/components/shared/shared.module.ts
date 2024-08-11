import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TooltipDirective } from './tooltip.directive';
import { ToastsComponent } from './toasts/toasts.component';
import { FilterTodosPipe } from '../filter-todos.pipe';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ButtonComponent,
    TooltipDirective,
    ToastsComponent,
    LoadingSpinnerComponent,
    FilterTodosPipe,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ButtonComponent,
    TooltipDirective,
    ToastsComponent,
    LoadingSpinnerComponent,
    FilterTodosPipe,
  ]
})
export class SharedModule { }
