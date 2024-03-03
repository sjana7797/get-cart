import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma } from '@prisma/client';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  //   get all users
  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  //   register a new user
  @Post('register')
  async register(@Body() user: Prisma.userCreateInput) {
    return this.userService.register(user);
  }
}
