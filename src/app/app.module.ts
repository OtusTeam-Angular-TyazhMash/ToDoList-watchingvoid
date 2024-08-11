import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'; // Импортируйте MatSelectModule

import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { ToDoListItemComponent } from './components/to-do-list-item/to-do-list-item.component';
import { ButtonComponent } from './components/shared/button/button.component';
import { ToastsComponent } from './components/shared/toasts/toasts.component';
import { ToastService } from './components/shared/service/toast.service';
import { TodoService } from './components/shared/service/todo.service';
import { TooltipDirective } from './components/shared/tooltip.directive';
import { SharedModule } from './components/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoCreateItemComponent } from './components/todo-create-item/todo-create-item.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    TodoCreateItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatSelectModule, // Импортируйте MatSelectModule
    SharedModule,
    MatFormFieldModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCheckboxModule,
    HttpClientModule,
  ],
  providers: [TodoService, ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
