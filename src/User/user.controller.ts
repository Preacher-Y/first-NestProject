import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { JwtGuard } from 'src/auth/jwt.guard';

@Controller('auth')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post()
  create(@Body() CreateUserDto: CreateUserDto) {
    return this.UserService.create(CreateUserDto);
  }
  @UseGuards(JwtGuard)
  @Get()
  findAll() {
    return this.UserService.findAll();
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.UserService.findOne(email);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    UpdateUserDto: UpdateUserDto,
  ) {
    return this.UserService.update(+id, UpdateUserDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.UserService.remove(+id);
  }
}
