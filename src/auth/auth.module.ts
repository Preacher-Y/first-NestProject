import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from 'src/User/user.module';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import JwtConfig from './config/JwtConfig';
import { JwtGuard } from './jwt.guard';
import { JwtStategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync(JwtConfig.asProvider()),
    PassportModule,
  ],
  providers: [AuthService, LocalStrategy, JwtGuard, JwtStategy],
  exports: [AuthService],
})
export class AuthModule {}
