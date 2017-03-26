import { Injectable } from '@angular/core';
import { Todo } from "app/todo";

@Injectable()
export class TodoDataService {

  lastId: number = 0;
  toDos: Todo[] = [];
  constructor() { }

  addTodo(todo: Todo): TodoDataService {
    if (!todo.id)
      todo.id = ++this.lastId;
    this.toDos.push(todo);
    return this;
  }

  deleteTodoById(id: number): TodoDataService {
    this.toDos = this.toDos.filter(todo => todo.id !== id);
    return this;
  }

  getTodoById(id: number) {
    return this.toDos.filter(todo => todo.id === id).pop();
  }
  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) return null;
    Object.assign(todo, values);
    return todo;
  }
  getAllTodos(): Todo[] {
    return this.toDos;
  }
  toggleTodoComplete(todo: Todo): Todo {
    let updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
