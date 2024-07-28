import { Component, OnInit } from '@angular/core';
import { ToastService } from '../service/toast.service'; // Убедитесь, что путь корректен

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {
  toasts: string[] = [];

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    this.toastService.toast$.subscribe(toasts => {
      this.toasts = toasts;
    });
  }
}
