import { Component, OnInit } from '@angular/core';
import { ToastService } from '../shared/service/toast.service';
import { TodoService } from '../shared/service/todo.service';
import {  Observable, find,filter, } from 'rxjs';

export interface TodoItem {
  id: number;
  title: string;
  completed: boolean;
  description: string;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent implements OnInit {
  newTodoTitle: string = '';
  newItemDescription: string = '';
  selectedItemId: number | null = null;
  isLoading: boolean = true;

  constructor(private toastService: ToastService, private todoService: TodoService) { }
  todos$: Observable<TodoItem[]> = this.todoService.todosSubject.asObservable();
  public todos:any

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
    this.todoService.todosSubject.subscribe(resp => this.todos = resp)
  }

  toggleCompletion(id: number): void {
    const todo = this.todos.find((todo:any) => todo.id === id);
    if (todo) {
      console.log(todo)
      todo.completed = !todo.completed;
      this.toastService.showToast('Todo item updated');
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo:any) => todo.id !== id);
    this.toastService.showToast('Todo item deleted');
  }

  selectItem(id: number) {
    this.selectedItemId = this.selectedItemId === id ? null : id;
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      const newId = this.todos.length > 0 ? Math.max(...this.todos.map((todo:any) => todo.id)) + 1 : 1;
      this.todos.push({ id: newId, title: this.newTodoTitle, completed: false, description: this.newItemDescription });
      this.newTodoTitle = '';
      this.newItemDescription = '';
      this.toastService.showToast('New todo added');
    }
  }

  getSelectedItemDescription(): string {
    const selectedItem = this.todos.find((item:any)=> item.id === this.selectedItemId);
    return selectedItem ? selectedItem.description : '';
  }

  saveEdit(id: number, newTitle: string): void {
    const todo = this.todos.find((todo:any) => todo.id === id);
    if (todo) {
      todo.title = newTitle;
      this.toastService.showToast('Todo title updated');
    }
  }
}
