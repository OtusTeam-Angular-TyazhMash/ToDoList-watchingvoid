import { Component, OnInit } from '@angular/core';
import { ToastService } from '../service/toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {
  messages: string[] = [];

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
    this.toastService.getMessages().subscribe(message => {
      if (message) {
        this.messages.push(message);
        setTimeout(() => {
          this.messages.shift(); // Remove the oldest message
        }, 3000); // Adjust duration as needed
      }
    });
  }
}
