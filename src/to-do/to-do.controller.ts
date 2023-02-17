import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from "@nestjs/common";
import { Todo } from "./entities/todo.entity";
import { randomUUID } from "crypto";
import { TodoStatusEnum } from "./entities/todoenum";
import { AddTodoDTO } from "./dto/AddTodoDTO";
import { UpdateTodoDTO } from "./dto/UpdateTodoDTO";
import { ToDoService } from "./to-do.service";

@Controller('todo')
export class ToDoController {
  constructor (private todoService: ToDoService) {}
  private todos = [];
  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }
  @Post()
  addTodo(
    @Body() newTodo: AddTodoDTO
  ): Todo {
    return this.todoService.addTodo(newTodo);

  }
  @Get(':id')
  getTodoById(@Param('id') id :string){
    return this.todoService.getTodoById(id);
  }
  @Delete(':id')
  deleteTodo(@Param('id') id :string){
    return this.todoService.deleteTodo(id);
  }
  @Put(':id')
  updateTodo(@Body() updateTodo: UpdateTodoDTO
  ): Todo {
    return this.todoService.updateTodo(updateTodo);
  }
}
