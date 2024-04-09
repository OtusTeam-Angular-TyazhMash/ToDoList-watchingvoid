import { Injectable } from '@angular/core';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos:Todo[] = [
    {id:1, title:"Сделать домашнее задание", completed:true},
    {id:2, title:"Сделать магазин на ASP.NET", completed:true},
    {id:3, title:"Быть уверенным в завтрашнем дне", completed:false},
  ];

  getTodos():Todo[]{
    return this.todos;
  }

  addTodo(todo:Todo):void{
    this.todos.push(todo);
  }

  deleteTodo(id:number):void{
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleCompletion(id:number):void{
    const todo = this.todos.find(todo => todo.id === id);
    if(todo) todo.completed = !todo.completed;
  }

  constructor() { }
}
