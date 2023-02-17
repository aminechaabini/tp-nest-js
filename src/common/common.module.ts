import { Global, Module } from "@nestjs/common";
import { CommonController } from './common.controller';
import { CommonService } from './common.service';
import { randomUUID } from "crypto";

const uuidProvider = {
  provide: 'uuid',
  useValue: randomUUID
};

@Global()
@Module({
  controllers: [CommonController],
  providers: [uuidProvider],
  exports:[uuidProvider]
})
export class CommonModule {}
