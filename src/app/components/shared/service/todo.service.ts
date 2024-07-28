import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosSubject = new BehaviorSubject<TodoItem[]>([
    { id: 1, title: 'Купить новый игровой ноутбук', completed: false, description: "Мама" },
    { id: 2, title: 'Прочитать книгу', completed: true, description: "Папа" },
    { id: 3, title: 'Прочитать книгу', completed: true, description: "Брат" },
  ]);

  todos$: Observable<TodoItem[]> = this.todosSubject.asObservable();

  getTodos(): TodoItem[] {
    return this.todosSubject.getValue();
  }

  addTodo(newTodo: TodoItem): void {
    const todos = this.getTodos();
    this.todosSubject.next([...todos, newTodo]);
  }

  updateTodo(updatedTodo: TodoItem): void {
    const todos = this.getTodos().map(todo => 
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    this.todosSubject.next(todos);
  }

  deleteTodo(id: number): void {
    const todos = this.getTodos().filter(todo => todo.id !== id);
    this.todosSubject.next(todos);
  }
}
