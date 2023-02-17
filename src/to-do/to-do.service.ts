import { Body, Delete, Get, Injectable, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { AddTodoDTO } from "./dto/AddTodoDTO";
import { Todo } from "./entities/todo.entity";
import { randomUUID } from "crypto";
import { TodoStatusEnum } from "./entities/todoenum";
import { UpdateTodoDTO } from "./dto/UpdateTodoDTO";
import { CommonService } from "../common/common.service";

@Injectable()
export class ToDoService {
  constructor(private commonService :CommonService) {
  }
  private todos = [];
  getTodos() {
    return this.todos;
  }
  addTodo(
    newTodo: AddTodoDTO
  ): Todo {
    const todo = new Todo();
    todo.id = this.commonService.generateUUID();
    todo.name=newTodo.name;
    todo.description=newTodo.description;
    todo.creationDate=Date.now();
    todo.status=TodoStatusEnum.waiting;
    this.todos.push(todo);
    return todo;

  }
  getTodoById(id :string){
    const todo = this.todos.find((myTodo) => myTodo.id == id);
    return todo;
  }
  deleteTodo( id :string){
    const index = this.todos.findIndex((myTodo) => myTodo.id == id);
    if(index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    }
    else throw new NotFoundException();
  }
  updateTodo(updateTodo: UpdateTodoDTO): Todo {
    const todo = this.getTodoById(updateTodo.id);
    todo.name= updateTodo.name ? updateTodo.name : todo.name;
    todo.description = updateTodo.description ? updateTodo.description : todo.description;
    todo.status = updateTodo.status ? updateTodo.status : todo.status ;
    return todo;

  }
}
