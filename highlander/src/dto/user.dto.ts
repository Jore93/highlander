import {ApiProperty} from "@nestjs/swagger";

export class createUserDto {
  @ApiProperty({example: 'Testikäyttäjä', description: 'Username'})
  readonly username: string;
  @ApiProperty({example: 'Password123', description: 'Plaintext password'})
  readonly password: string;
  @ApiProperty({example: true, description: 'Boolean if user is admin or not'})
  readonly admin: boolean;
};

export class readUserDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of user in database', required: false})
  readonly uuid?: string;
  @ApiProperty({example: 'Testikäyttäjä', description: 'Username', required: false})
  readonly username?: string;
  @ApiProperty({example: 'Password123', description: 'Plaintext password', required: false})
  readonly password?: string;
  @ApiProperty({example: true, description: 'Boolean if user is admin or not', required: false})
  readonly admin?: boolean;
};

export class updateUserDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of user in database'})
  readonly uuid?: string;
  @ApiProperty({example: 'Testikäyttäjä', description: 'Username', required: false})
  readonly username?: string;
  @ApiProperty({example: 'Password123', description: 'Plaintext password', required: false})
  readonly password?: string;
  @ApiProperty({example: true, description: 'Boolean if user is admin or not', required: false})
  readonly admin?: boolean;
};

export class deleteUserDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of user in database'})
  readonly uuid: string;
}
