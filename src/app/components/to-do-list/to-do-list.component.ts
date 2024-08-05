import { Component, OnInit } from '@angular/core';
import { ToastService } from '../shared/service/toast.service';
import { TodoService } from '../shared/service/todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})

export class ToDoListComponent implements OnInit {
  todos = [
    { id: 1, title: 'Купить новый игровой ноутбук', completed: false, description: 'Мама', status: 'InProgress' },
    { id: 2, title: 'Прочитать книгу', completed: true, description: 'Папа', status: 'Completed' },
    { id: 3, title: 'Прочитать книгу', completed: true, description: 'Брат', status: 'InProgress' },
  ];
  newTodoTitle: string = '';
  newItemDescription: string = '';
  selectedItemId: number | null = null;
  isLoading: boolean = true;
  filterStatus: string | null = null; // Фильтр для статуса

  constructor(private toastService: ToastService, private todoService: TodoService) { }

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
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo:any) => todo.id !== id);
    this.toastService.showToast('Todo item deleted');
  }

  selectItem(id: number): void {
    this.selectedItemId = this.selectedItemId === id ? null : id;
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      const newId = this.todos.length > 0 ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
      this.todos.push({ id: newId, title: this.newTodoTitle, completed: false, description: this.newItemDescription, status: 'InProgress' });
      this.newTodoTitle = '';
      this.newItemDescription = '';
      this.toastService.showToast('Todo item added');
    }
  }

  getSelectedItemDescription(): string | undefined {
    return this.todos.find(item => item.id === this.selectedItemId)?.description;
  }

  filterTodos(status: string | null): void {
    this.filterStatus = status;
  }
}
