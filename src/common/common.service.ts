import { Injectable } from '@nestjs/common';
import { randomUUID } from "crypto";

@Injectable()
export class CommonService {
  generateUUID(): string{
    return randomUUID();
  }
}
