import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TooltipDirective } from './tooltip.directive';
import { ToastComponent } from './toasts/toasts.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ButtonComponent,
    TooltipDirective,
    ToastComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ButtonComponent,
    TooltipDirective,
    ToastComponent,
    LoadingSpinnerComponent,
  ]
})
export class SharedModule { }
