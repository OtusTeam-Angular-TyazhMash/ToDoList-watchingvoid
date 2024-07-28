import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TooltipDirective } from './tooltip.directive';
import { ToastsComponent } from './toasts/toasts.component';

@NgModule({
  declarations: [
    ButtonComponent,
    TooltipDirective,
    ToastsComponent
  ],
  imports: [CommonModule],
  exports: [
    ButtonComponent,
    ToastsComponent,
    TooltipDirective
  ]
})
export class SharedModule { }
