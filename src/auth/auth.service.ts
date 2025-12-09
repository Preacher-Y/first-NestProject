import { Injectable, HttpException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UpdateUserDto } from 'src/User/dto/updateUser.dto';
import { UserService } from 'src/User/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, passwordGiv: string) {
    const user = await this.userService.findOne(email);
    if (user && user.password !== passwordGiv)
      throw new HttpException('Invalid Credential', 401);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...rest } = user;
    return rest;
  }

  login(user: UpdateUserDto) {
    const payload = {
      name: user.firstName + '' + user.lastName,
      sub: user.email,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
