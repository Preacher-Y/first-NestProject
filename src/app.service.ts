import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './User/dto/updateUser.dto';

@Injectable()
export class AppService {
  getHello(req: { user: UpdateUserDto }): string {
    return `Welcome Back Sir, ${req.user.firstName} ${req.user.lastName} `;
  }
}
