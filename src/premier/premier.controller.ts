import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';

@Controller('premier')
export class PremierController {
  @Get()
  getPremier(): string {
    console.log('getPremier');
    return 'getPremier';
  }
  @Post()
  postPremier(): string {
    console.log('postPremier');
    return 'postPremier';
  }
  @Delete()
  deletePremier(): string {
    console.log('deletePremier');
    return 'deletePremier';
  }
  @Put()
  putPremier(): string {
    console.log('putPremier');
    return 'putPremier';
  }
  @Patch()
  patchPremier(): string {
    console.log('patchPremier');
    return 'patchPremier';
  }
}
