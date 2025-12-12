import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/localAuth.guard';
import { UpdateUserDto } from './User/dto/updateUser.dto';
import { AuthService } from './auth/auth.service';
import { JwtGuard } from './auth/jwt.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication EndPoint')
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private authService: AuthService,
  ) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req: { user: UpdateUserDto }) {
    return this.authService.login(req.user);
  }
  @ApiBearerAuth()
  @UseGuards(JwtGuard)
  @Get()
  getHello(@Request() req: { user: UpdateUserDto }): string {
    return this.appService.getHello(req);
  }
}
