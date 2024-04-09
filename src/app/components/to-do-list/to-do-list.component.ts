import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
   todos?:Todo[];
   newTodoTitle:string = ""

  constructor(private todoService: TodoService){}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();

  }
  addTodo(title: string): void {
    const newTodo: Todo = {
      id: Date.now(), 
      title: title,
      completed: false
    };
    if(title.length!==0){
      this.todoService.addTodo(newTodo);
      this.todos = this.todoService.getTodos();
    }
    else alert("Пустое поле")
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getTodos();
  }

  toggleCompletion(id: number): void {
    this.todoService.toggleCompletion(id);
    this.todos = this.todoService.getTodos();
  }
}
