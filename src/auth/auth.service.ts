import { Injectable, HttpException } from '@nestjs/common';
import { UserService } from 'src/User/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, passwordGiv: string) {
    const user = await this.userService.findOne(email);
    if (user && user.password !== passwordGiv)
      throw new HttpException('Invalid Credential', 401);

    const { password, ...rest } = user;

    return rest;
  }
}
