import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastSubject = new Subject<string[]>();
  toast$ = this.toastSubject.asObservable();

  private toasts: string[] = [];

  showToast(message: string) {
    this.toasts = [...this.toasts, message];
    this.toastSubject.next(this.toasts);
    setTimeout(() => this.removeToast(message), 3000); // Удаление уведомления через 3 секунды
  }

  private removeToast(message: string) {
    this.toasts = this.toasts.filter(t => t !== message);
    this.toastSubject.next(this.toasts);
  }
}
