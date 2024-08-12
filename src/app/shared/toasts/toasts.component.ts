import { Component, OnInit } from '@angular/core';
import { ToastService, Toast } from '../service/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {
  toasts: Toast[] = [];

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.getToasts().subscribe((toasts: Toast[]) => {
      this.toasts = toasts;
    });
  }

  removeToast(id: number): void {
    this.toastService.removeToast(id);
  }
}
