import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Toast {
  id: number;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastsSubject: BehaviorSubject<Toast[]> = new BehaviorSubject<Toast[]>([]);
  public readonly toasts$: Observable<Toast[]> = this.toastsSubject.asObservable();
  private idCounter = 0;
  
  getToasts(): Observable<Toast[]> {
    return this.toastsSubject.asObservable();
  }

  showToast(message: string, type: 'success' | 'error' | 'info' | 'warning' = 'info'): void {
    const toast: Toast = { id: this.idCounter++, message, type };
    const currentToasts = this.toastsSubject.getValue();
    this.toastsSubject.next([...currentToasts, toast]);
    
    // Удаление уведомления через 5 секунд
    setTimeout(() => this.removeToast(toast.id), 5000);
  }

  removeToast(id: number): void {
    const currentToasts = this.toastsSubject.getValue();
    this.toastsSubject.next(currentToasts.filter(toast => toast.id !== id));
  }
}
