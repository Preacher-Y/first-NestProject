import { IsEmail, IsString, IsStrongPassword, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(3, 30)
  firstName: string;
  @IsString()
  @Length(3, 30)
  lastName: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: string;
}
