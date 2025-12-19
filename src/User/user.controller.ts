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
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiParam,
} from '@nestjs/swagger';

@ApiTags('User EndPoint')
@Controller('auth')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Register a new user' })
  @ApiCreatedResponse({
    description: 'User created',
    schema: {
      example: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
      },
    },
  })
  @ApiBadRequestResponse({
    description: 'Invalid input or user already exists',
  })
  create(@Body() CreateUserDto: CreateUserDto) {
    return this.UserService.create(CreateUserDto);
  }
  @UseGuards(JwtGuard)
  @ApiBearerAuth()
  @Get()
  @ApiOperation({ summary: 'Get all users (protected)' })
  @ApiOkResponse({ description: 'Array of users' })
  findAll() {
    return this.UserService.findAll();
  }

  @Get(':email')
  @ApiOperation({ summary: 'Get a user by email' })
  @ApiParam({
    name: 'email',
    description: 'User email',
    example: 'john@example.com',
  })
  @ApiOkResponse({
    description: 'User found',
    schema: {
      example: {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
      },
    },
  })
  @ApiNotFoundResponse({ description: 'User not found' })
  findOne(@Param('email') email: string) {
    return this.UserService.findOne(email);
  }

  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Patch(':id')
  @ApiOperation({ summary: 'Update a user (protected)' })
  @ApiParam({ name: 'id', description: 'User id', example: 1 })
  @ApiOkResponse({
    description: 'Updated Successfully',
    schema: { example: { message: 'Updated Successfully' } },
  })
  @ApiBadRequestResponse({ description: 'Failed to update' })
  update(
    @Param('id') id: string,
    @Body()
    UpdateUserDto: UpdateUserDto,
  ) {
    return this.UserService.update(+id, UpdateUserDto);
  }
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user (protected)' })
  @ApiParam({ name: 'id', description: 'User id', example: 1 })
  @ApiOkResponse({
    description: 'Deleted Successfully',
    schema: { example: { message: 'Deleted Successfully' } },
  })
  @ApiBadRequestResponse({ description: 'Failed to delete' })
  remove(@Param('id') id: string) {
    return this.UserService.remove(+id);
  }
}
