import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseUUIDPipe,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';

@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<{ success: true; message: string; users: User[] }> {
    const users = await this.usersService.findAll();
    return {
      success: true,
      message: 'Users fetched successfully.',
      users,
    };
  }

  @Get(':id')
  async findOne(@Param('id', ParseUUIDPipe) id: string): Promise<{ success: true; message: string; user: User }> {
    const user = await this.usersService.findOne(id);
    return {
      success: true,
      message: 'User fetched successfully.',
      user,
    };
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<{ success: true; message: string; user: User }> {
    const user = await this.usersService.create(createUserDto);
    return {
      success: true,
      message: 'User created successfully.',
      user,
    };
  }

  @Patch(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<{ success: true; message: string; user: User }> {
    const user = await this.usersService.update(id, updateUserDto);
    return {
      success: true,
      message: 'User updated successfully.',
      user,
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseUUIDPipe) id: string): Promise<{ success: true; message: string }> {
    await this.usersService.remove(id);
    return {
      success: true,
      message: 'User deleted successfully.',
    };
  }
}