import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toasts: Toast[] = [];
  private toastSubject = new Subject<Toast[]>();
  private idCounter = 0;

  getToasts(): Observable<Toast[]> {
    return this.toastSubject.asObservable();
  }

  showToast(message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info'): void {
    const toast: Toast = { id: this.idCounter++, message, type };
    this.toasts.push(toast);
    this.toastSubject.next(this.toasts);
    
    // Удаление уведомления через 5 секунд
    setTimeout(() => this.removeToast(toast.id), 5000);
  }

  removeToast(id: number): void {
    this.toasts = this.toasts.filter(toast => toast.id !== id);
    this.toastSubject.next(this.toasts);
  }
}
