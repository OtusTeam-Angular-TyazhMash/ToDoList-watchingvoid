import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodos'
})
export class FilterTodosPipe implements PipeTransform {
  transform(todos: any[], status: string | null): any[] {
    if (!status) {
      return todos;
    }
    return todos.filter(todo => todo.status === status);
  }
}
