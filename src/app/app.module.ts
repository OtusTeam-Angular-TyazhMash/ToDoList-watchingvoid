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
import { FilterTodosPipe } from './components/filter-todos.pipe'; // Импортируйте Pipe

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoListItemComponent,
    FilterTodosPipe // Добавьте Pipe в декларации
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatSelectModule, // Импортируйте MatSelectModule
    SharedModule
  ],
  providers: [TodoService, ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
