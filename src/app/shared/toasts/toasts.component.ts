import { Component, OnInit } from '@angular/core';
import { ToastService, Toast } from '../service/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastComponent implements OnInit {
  toasts: Toast[] = [];

  constructor(private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.toasts$.subscribe(toasts => {
      this.toasts = toasts;
    });
  }

  removeToast(id: number): void {
    this.toastService.removeToast(id);
  }
}
