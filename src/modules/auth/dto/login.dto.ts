import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDTO {
  @ApiProperty({
    description: 'Email of the user',
    example: 'example@example.com',
    required: true,
    type: String,
    default: 'example@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}
