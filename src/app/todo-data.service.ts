import { Injectable } from '@angular/core';
import { Todo } from "app/todo";

@Injectable()
export class TodoDataService {

  lastId:number =0;
  toDos:Todo[] =[];
  constructor() { }

  addTodo(todo:Todo):TodoDataService {
    if(!todo.id)
    todo.id= ++this.lastId;
    return this;
  }

  deleteTodoById(id:number) :TodoDataService {
    this.toDos = this.toDos.filter(todo=>todo.id!==id);
    return this;
  }

  updateTodoById(id:number, values:Object={}):Todo {
    
  }
}
