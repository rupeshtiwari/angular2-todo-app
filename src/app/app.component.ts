import { Component } from '@angular/core';
import { TodoDataService } from "app/todo-data.service";
import { Todo } from "app/todo";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {
  newTodo: Todo = new Todo();
  constructor(private todoDataService: TodoDataService) {
  }
 
  toggleTodoComplete(todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }
  removeTodo(todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }
  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
