import {ApiProperty} from "@nestjs/swagger";

export class createLanguageDto {
  @ApiProperty({example: 'English', description: 'Name of a language'})
  readonly language: string;
  @ApiProperty({example: 'Excellent', description: 'Level of expertise'})
  readonly level: string;
};

export class readLanguageDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of language item in database'})
  readonly uuid: string;
  @ApiProperty({example: 'English', description: 'Name of a language', required: false})
  readonly language?: string;
  @ApiProperty({example: 'Excellent', description: 'Level of expertise', required: false})
  readonly level?: string;
  @ApiProperty({example: true, description: 'Wether to read all items from table or just item with UUID', required: false})
  readonly readAll?: boolean;
};

export class updateLanguageDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of language item in database'})
  readonly uuid: string;
  @ApiProperty({example: 'English', description: 'Name of a language', required: false})
  readonly language?: string;
  @ApiProperty({example: 'Excellent', description: 'Level of expertise', required: false})
  readonly level?: string;
};

export class deleteLanguageDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of language item in database'})
  readonly uuid: string;
}
