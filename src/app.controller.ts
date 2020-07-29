import { PrismaService } from './prisma/prisma.service';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Food } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('foods')
  getFoods(): Promise<Food[]> {
    return this.prismaService.food.findMany();
  }
}
