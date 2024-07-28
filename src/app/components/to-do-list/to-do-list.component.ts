import { Component, OnInit } from '@angular/core';
import { ToastService } from '../shared/service/toast.service'; // Убедитесь, что путь корректен

@Component({
  selector: 'app-todo-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  todos = [
    { id: 1, title: 'Купить новый игровой ноутбук', completed: false, description: 'Мама' },
    { id: 2, title: 'Прочитать книгу', completed: true, description: 'Папа' },
    { id: 3, title: 'Прочитать книгу', completed: true, description: 'Брат' },
  ];
  newTodoTitle: string = '';
  newItemDescription: string = '';
  selectedItemId: number | null = null;
  isLoading: boolean = true;

  constructor(private toastService: ToastService) { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  toggleCompletion(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.toastService.showToast('Todo item updated');
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.toastService.showToast('Todo item deleted');
  }

  selectItem(id: number) {
    this.selectedItemId = this.selectedItemId === id ? null : id;
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      const newId = this.todos.length > 0 ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
      this.todos.push({ id: newId, title: this.newTodoTitle, completed: false, description: this.newItemDescription });
      this.newTodoTitle = '';
      this.newItemDescription = '';
      this.toastService.showToast('New todo added');
    }
  }

  getSelectedItemDescription(): string {
    const selectedItem = this.todos.find(item => item.id === this.selectedItemId);
    return selectedItem ? selectedItem.description : '';
  }

  saveEdit(id: number, newTitle: string): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.title = newTitle;
      this.toastService.showToast('Todo title updated');
    }
  }
}
