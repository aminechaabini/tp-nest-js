import { TodoStatusEnum } from "../entities/todoenum";

export class UpdateTodoDTO{
  id: string;
  name: string;
  description: string;
  status : TodoStatusEnum;
}