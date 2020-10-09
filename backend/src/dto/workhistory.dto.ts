import {ApiProperty} from "@nestjs/swagger";

export class createWorkhistoryDto {
  @ApiProperty({example: 'Evil Corp', description: 'The name of the employer'})
  readonly employer: string;
  @ApiProperty({example: 'CEO', description: 'The position during the employment'})
  readonly position: string;
  @ApiProperty({example: '10/2017 - 01/2019', description: 'The duration of employment'})
  readonly duration: string;
};

export class readWorkhistoryDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of paragraph item in database', required: false})
  readonly uuid?: string;
  @ApiProperty({example: 'Evil Corp', description: 'The name of the employer', required: false})
  readonly employer?: string;
  @ApiProperty({example: 'CEO', description: 'The position during the employment'})
  readonly position: string;
  @ApiProperty({example: '10/2017 - 01/2019', description: 'The duration of employment'})
  readonly duration: string;
  @ApiProperty({example: true, description: 'Wether to read all items from table or just item with UUID', required: false})
  readonly readAll?: boolean;
};

export class updateWorkhistoryDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of paragraph item in database'})
  readonly uuid: string;
  @ApiProperty({example: 'Evil Corp', description: 'The name of the employer', required: false})
  readonly employer: string;
  @ApiProperty({example: 'CEO', description: 'The position during the employment'})
  readonly position: string;
  @ApiProperty({example: '10/2017 - 01/2019', description: 'The duration of employment'})
  readonly duration: string;
};

export class deleteWorkhistoryDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of paragraph item in database'})
  readonly uuid: string;
}
