import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  todos = [
    { id: 1, title: 'Купить новый игровой ноутбук', completed: false },
    { id: 2, title: 'Прочитать книгу', completed: true },
    { id: 3, title: 'Прочитать книгу', completed: true },
  ];
  newTodoTitle: string = '';
  newItemText:boolean = false
  isLoading:boolean = true;
  

  ngOnInit(){
    setTimeout(()=>{
      this.isLoading = false;
    },500)
  }

  toggleCompletion(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    console.log(this.isLoading);
  }

  addTodo(value:string|void): void {
    if (this.newTodoTitle.trim()) {
      const newId = this.todos.length > 0 ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
      this.todos.push({ id: newId, title: this.newTodoTitle, completed: false });
      this.newTodoTitle = '';
    }
  }
}