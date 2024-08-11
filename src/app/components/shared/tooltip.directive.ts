import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideTooltip();
  }

  private showTooltip() {
    const tooltip = this.elementRef.nativeElement.querySelector('.tooltip');
    if (tooltip) {
      tooltip.style.display = 'block';
    }
  }

  private hideTooltip() {
    const tooltip = this.elementRef.nativeElement.querySelector('.tooltip');
    if (tooltip) {
      tooltip.style.display = 'none';
    }
  }
}