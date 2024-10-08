import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { TodoService } from './task.service';
import { Todo } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskStateService {
  private tasksSubject: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  private filterSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  public tasks$: Observable<Todo[]> = combineLatest([
    this.tasksSubject.asObservable(),
    this.filterSubject.asObservable()
  ]).pipe(
    map(([tasks, filter]) => 
      filter ? tasks.filter(task => task.status === filter) : tasks
    )
  );

  constructor(private taskService: TodoService) {
    this.loadInitialData();
  }

  public setFilter(filter: string): void {
    this.filterSubject.next(filter);
  }

  public addTask(todo: Todo): void {
    this.taskService.addTodo(todo).subscribe(newTask => {
      const currentTasks = this.tasksSubject.getValue();
      this.tasksSubject.next([...currentTasks, newTask]);
    });
  }

  public updateTask(id: number, todo: Partial<Todo>): void {
    this.taskService.updateTodo(id, todo).subscribe(() => {
      const currentTasks = this.tasksSubject.getValue();
      const updatedTasks = currentTasks.map(task =>
        task.id === id ? { ...task, ...todo } : task
      );
      this.tasksSubject.next(updatedTasks);
    });
  }

  public deleteTask(id: number): void {
    this.taskService.deleteTodo(id).subscribe(() => {
      const currentTasks = this.tasksSubject.getValue();
      const filteredTasks = currentTasks.filter(task => task.id !== id);
      this.tasksSubject.next(filteredTasks);
    });
  }

private loadInitialData(): void {
    this.taskService.getTodos().subscribe(tasks => {
      console.log('Loaded tasks into service:', tasks);
      this.tasksSubject.next(tasks);
    });
  }
  
  public getTaskById(id: number): Observable<Todo | undefined> {
    return this.tasks$.pipe(
      map(tasks => {
        console.log('Tasks in state during getTaskById:', tasks.map(task => task.id));
        return tasks.find(task => task.id === id);
      })
    );
  }
  
}
