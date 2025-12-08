import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private UserRepo: Repository<User>) {}
  async create(CreateUserDto: CreateUserDto) {
    const exist = await this.UserRepo.findOne({
      where: {
        email: CreateUserDto.email,
      },
    });
    if (exist) throw new HttpException('The User already Exists', 400);
    return await this.UserRepo.save(CreateUserDto);
  }

  async findAll() {
    const users = await this.UserRepo.find();
    if (users.length <= 0) return { message: 'No Users In The Database' };
    return users;
  }

  async findOne(email: string) {
    const user = await this.UserRepo.findOne({
      where: {
        email,
      },
    });
    if (!user) throw new NotFoundException();
    return user;
  }

  async update(id: number, UpdateUserDto: UpdateUserDto) {
    const user = await this.UserRepo.findOne({
      where: {
        id,
      },
    });
    if (!user) throw new NotFoundException();

    const { affected } = await this.UserRepo.update({ id }, UpdateUserDto);
    if (affected) return { message: 'Updated Successfully' };
    throw new HttpException('Failed to Update', 400);
  }

  async remove(id: number) {
    const user = await this.UserRepo.findOne({
      where: {
        id,
      },
    });
    if (!user) throw new NotFoundException();

    const { affected } = await this.UserRepo.delete({ id });
    if (affected) return { message: 'Deleted Successfully' };
    throw new HttpException('Failed to Delete', 400);
  }
}
