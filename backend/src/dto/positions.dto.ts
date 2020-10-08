import {ApiProperty} from "@nestjs/swagger";

export class createPositionDto {
  @ApiProperty({example: 'CEO', description: 'The position in organisation'})
  readonly position: string;
  @ApiProperty({example: '10/2017 - 02/2019', description: 'The duration in working position'})
  readonly duration: string;
  @ApiProperty({example: 'Evil corp.', description: 'The organisation where worked'})
  readonly organisation: string;
};

export class readPositionDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of position item in database', required: false})
  readonly uuid?: string;
  @ApiProperty({example: 'CEO', description: 'The position in organisation', required: false})
  readonly position?: string;
  @ApiProperty({example: '10/2017 - 02/2019', description: 'The duration in working position', required: false})
  readonly duration?: string;
  @ApiProperty({example: 'Evil corp.', description: 'The organisation where worked', required: false})
  readonly organisation?: string;
  @ApiProperty({example: true, description: 'Wether to read all items from table or just item with UUID', required: false})
  readonly readAll?: boolean;
};

export class updatePositionDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of position item in database'})
  readonly uuid: string;
  @ApiProperty({example: 'CEO', description: 'The position in organisation', required: false})
  readonly position?: string;
  @ApiProperty({example: '10/2017 - 02/2019', description: 'The duration in working position', required: false})
  readonly duration?: string;
  @ApiProperty({example: 'Evil corp.', description: 'The organisation where worked', required: false})
  readonly organisation?: string;
};

export class deletePositionDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of position item in database'})
  readonly uuid: string;
}
