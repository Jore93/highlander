import {ApiProperty} from "@nestjs/swagger";

export class createEducationDto {
  @ApiProperty({example: 'M.Sc in WCE', description: 'The name of an education'})
  readonly name: string;
  @ApiProperty({example: 'MIT', description: 'The place where the education is received'})
  readonly place: string;
  @ApiProperty({example: '10/2017 - 02/2020', description: 'The duration of the education'})
  readonly duration: string;
};

export class readEducationDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of education item in database'})
  readonly uuid: string;
  @ApiProperty({example: 'M.Sc in WCE', description: 'The name of an education', required: false})
  readonly name?: string;
  @ApiProperty({example: 'MIT', description: 'The place where the education is received', required: false})
  readonly place?: string;
  @ApiProperty({example: '10/2017 - 02/2020', description: 'The duration of the education', required: false})
  readonly duration?: string;
  @ApiProperty({example: true, description: 'Wether to read all items from table or just item with UUID', required: false})
  readonly readAll?: boolean;
};

export class updateEducationDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of education item in database'})
  readonly uuid: string;
  @ApiProperty({example: 'M.Sc in WCE', description: 'The name of an education', required: false})
  readonly name?: string;
  @ApiProperty({example: 'MIT', description: 'The place where the education is received', required: false})
  readonly place?: string;
  @ApiProperty({example: '10/2017 - 02/2020', description: 'The duration of the education', required: false})
  readonly duration?: string;
};

export class deleteEducationDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of education item in database'})
  readonly uuid: string;
};
