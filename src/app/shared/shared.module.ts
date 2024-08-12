import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { TooltipDirective } from './tooltip.directive';
import { ToastsComponent } from './toasts/toasts.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    ButtonComponent,
    TooltipDirective,
    ToastsComponent,
    LoadingSpinnerComponent,
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
  ]
})
export class SharedModule { }
