import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private messagesSubject = new Subject<string>();

  showToast(message: string): void {
    this.messagesSubject.next(message);
  }

  getMessages() {
    return this.messagesSubject.asObservable();
  }
}
