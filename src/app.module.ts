import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PremierModule } from './premier/premier.module';
import { ToDoModule } from './to-do/to-do.module';
import { TodoService } from './todo/todo.service';
import { CommonModule } from './common/common.module';

@Module({
  imports: [PremierModule, ToDoModule, CommonModule],
  controllers: [AppController],
  providers: [AppService, TodoService],
})
export class AppModule {}
