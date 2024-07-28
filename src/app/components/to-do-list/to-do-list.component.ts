import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  todos = [
    { id: 1, title: 'Купить новый игровой ноутбук', completed: false, description: 'Мама' },
    { id: 2, title: 'Прочитать книгу', completed: true, description: 'Папа' },
    { id: 3, title: 'Прочитать книгу', completed: true, description: 'Брат' }
  ];
  newTodoTitle: string = '';
  newItemDescription: string = '';
  selectedItemId: number | null = null;
  isLoading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  }

  toggleCompletion(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  selectItem(id: number): void {
    this.selectedItemId = this.selectedItemId === id ? null : id;
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      const newId = this.todos.length > 0 ? Math.max(...this.todos.map(todo => todo.id)) + 1 : 1;
      this.todos.push({
        id: newId,
        title: this.newTodoTitle,
        completed: false,
        description: this.newItemDescription
      });
      this.newTodoTitle = '';
      this.newItemDescription = '';
    }
  }

  getSelectedItemDescription(): string | undefined {
    const selectedItem = this.todos.find(item => item.id === this.selectedItemId);
    return selectedItem?.description;
  }
  
}
