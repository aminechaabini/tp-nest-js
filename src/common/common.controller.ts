import { Controller, Get } from "@nestjs/common";
import { CommonService } from "./common.service";

@Controller('common')
export class CommonController {
  constructor(private commonService : CommonService) {
  }
  @Get()
  generateUUID() : string{
    return this.commonService.generateUUID();
  }
}
