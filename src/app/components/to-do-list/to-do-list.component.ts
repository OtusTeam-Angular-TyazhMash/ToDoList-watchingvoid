import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../shared/service/todo.service';
import { Todo } from '../shared/models/todo.model';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodoTitle: string = '';
  newItemDescription: string = '';
  selectedItemId: number | null = null;
  isLoading: boolean = true;
  statusFilter: string | null = null;

  constructor(private todoService: TodoService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.loadTodos();
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.selectedItemId = id || null;
    });
  }

  loadTodos(): void {
    this.isLoading = true;
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
      this.isLoading = false;
    });
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      const newTodo: Todo = {
        title: this.newTodoTitle,
        description: this.newItemDescription,
        status: 'InProgress',
        completed: false
      };
      this.todoService.addTodo(newTodo).subscribe(todo => {
        this.todos.push(todo);
        this.newTodoTitle = '';
        this.newItemDescription = '';
      });
    }
  }

  updateTodo(id: number, updatedTodo: Partial<Todo>): void {
    this.todoService.updateTodo(id, updatedTodo).subscribe(() => {
      const index = this.todos.findIndex(todo => todo.id === id);
      if (index !== -1) {
        this.todos[index] = { ...this.todos[index], ...updatedTodo };
      }
    });
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
    });
  }

  selectItem(id: number): void {
    this.selectedItemId = id;
    this.router.navigate(['tasks', id]);
  }

  updateItemStatus(id: number | undefined, status: string): void {
    if (id !== undefined) {
      // Теперь TypeScript знает, что id определен
      console.log('Updating item status for id:', id, 'to', status);
    }
  }

  // Метод для фильтрации по статусу
  get filteredTodos(): Todo[] {
    if (this.statusFilter === null) {
      return this.todos;
    }
    return this.todos.filter(todo => todo.status === this.statusFilter);
  }

  // Метод для получения описания выбранного элемента
  getSelectedItemDescription(): string | undefined {
    return this.todos.find(item => item.id === this.selectedItemId)?.description;
  }

  toggleCompletion(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      this.updateTodo(id, { completed: !todo.completed });
    }
  }

  editItem(id: number | undefined): void {
    if (id !== undefined) {
      // Теперь TypeScript знает, что id определен
      console.log('Editing item with id:', id);
    }
  }
}
