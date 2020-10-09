import {ApiProperty} from "@nestjs/swagger";

export class createParagraphDto {
  @ApiProperty({example: 'Title', description: 'Title of a paragraph'})
  readonly title: string;
  @ApiProperty({example: 'Paragraph text', description: 'Content of a paragraph'})
  readonly content: string;
};

export class readParagraphDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of paragraph item in database', required: false})
  readonly uuid?: string;
  @ApiProperty({example: true, description: 'Wether to read all items from table or just item with UUID', required: false})
  readonly readAll?: boolean;
  @ApiProperty({example: 'Title', description: 'Title of a paragraph', required: false})
  readonly title?: string;
  @ApiProperty({example: 'Paragraph text', description: 'Content of a paragraph', required: false})
  readonly content: string;
};

export class updateParagraphDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of paragraph item in database'})
  readonly uuid: string;
  @ApiProperty({example: 'Title', description: 'Title of a paragraph', required: false})
  readonly title: string;
  @ApiProperty({example: 'Paragraph text', description: 'Content of a paragraph', required: false})
  readonly content: string;
};

export class deleteParagraphDto {
  @ApiProperty({example: '68d1dd97-de26-4f39-9a8d-88fa5699e780', description: 'UUID of paragraph item in database'})
  readonly uuid: string;
}
