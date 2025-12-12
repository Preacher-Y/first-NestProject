import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, IsStrongPassword, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 30)
  @ApiProperty()
  firstName: string;
  @IsString()
  @Length(3, 30)
  @ApiProperty()
  lastName: string;

  @IsString()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  @ApiProperty()
  password: string;
}
