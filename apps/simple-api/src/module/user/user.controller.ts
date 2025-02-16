import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { ZodValidationPipe } from '../../common/zod-validation-pipe';
import { CreateUserDto, createUserSchema } from './dto/create-user.dto';

@Controller(['user'])
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('all')
  async getAll() {
    return await this.userService.getAll();
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createUserSchema))
  async create(@Body() createUserDto: CreateUserDto) {
    const data = {
      name: createUserDto.name,
      email: createUserDto.email,
      hashedPassword: createUserDto.password,
    };

    return await this.userService.create(data);
  }
}
