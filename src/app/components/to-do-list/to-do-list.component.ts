import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/service/todo.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  todos: any[] = [];
  newTodoTitle: string = '';
  newItemDescription: string = '';
  selectedItemId: number | null = null;
  isLoading: boolean = true;
  statusFilter: string | null = null;

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.isLoading = false;
    });
  }

  addTodo() {
    if (this.newTodoTitle.trim()) {
      const newTodo = {
        title: this.newTodoTitle,
        description: this.newItemDescription,
        status: 'InProgress'
      };
      this.todoService.addTodo(newTodo).subscribe(todo => {
        this.todos.push(todo);
        this.newTodoTitle = '';
        this.newItemDescription = '';
      });
    }
  }

  updateTodo(id: number, updatedTodo: any) {
    this.todoService.updateTodo(id, updatedTodo).subscribe(() => {
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos[index] = { ...this.todos[index], ...updatedTodo };
      }
    });
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }

  selectItem(id: number) {
    this.selectedItemId = this.selectedItemId === id ? null : id;
  }

  updateItemStatus(id: number, status: string) {
    const updatedTodo = { status };
    this.updateTodo(id, updatedTodo);
  }

  // Метод для фильтрации по статусу
  get filteredTodos() {
    if (this.statusFilter === null) {
      return this.todos;
    }
    return this.todos.filter(todo => todo.status === this.statusFilter);
  }

  // Метод для получения описания выбранного элемента
  getSelectedItemDescription(): string | undefined {
    return this.todos.find(item => item.id === this.selectedItemId)?.description;
  }
  toggleCompletion(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      this.updateTodo(id, { completed: !todo.completed });
    }
  }
  editItem(id: number) {
    // В этом методе можно открыть форму редактирования или что-то подобное
    console.log('Editing item with id:', id);
  }
  
}
