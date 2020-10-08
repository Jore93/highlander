import {Body, Controller, HttpStatus, Post, Res} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import express from 'express';

import {ParagraphService} from './paragraph.service';
import {createParagraphDto, deleteParagraphDto, readParagraphDto, updateParagraphDto} from '../dto/paragraph.dto';

@ApiTags('Paragraph')
@Controller('paragraph')
export class ParagraphController {
  constructor(private readonly paragraphService: ParagraphService) {};

  @Post('/create')
  async createParagraph(@Body() post: createParagraphDto, @Res() res: express.Response): Promise<any> {
    if (post?.title && post?.content) {
      try {
        const createdParagraph = await this.paragraphService.create(post.title, post.content);
        return res.status(createdParagraph.ok ? HttpStatus.CREATED : HttpStatus.NOT_FOUND).json(createdParagraph);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Creating paragraph failed',
        });
      }
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json({
        ok: false,
        data: 'Missing parameters',
      })
    }
  }

  @Post('/read')
  async readParagraph(@Body() post: readParagraphDto, @Res() res: express.Response): Promise<any> {
    if (post?.uuid || post?.title || post?.content || post?.readAll !== undefined) {
      try {
        const readParagraph = await this.paragraphService.read(post?.uuid, post?.title, post?.content, post?.readAll);
        return res.status(readParagraph.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(readParagraph);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Reading paragraph failed',
        });
      }
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json({
        ok: false,
        data: 'Need to post either uuid and/or readAll',
      });
    }
  }

  @Post('/update')
  async updateParagraph(@Body() post: updateParagraphDto, @Res() res: express.Response): Promise<any> {
    if (post?.uuid || post?.title || post?.content) {
      try {
        const updatedParagraph = await this.paragraphService.update(post?.uuid, post?.title, post?.content);
        return res.status(updatedParagraph.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(updatedParagraph);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Updating paragraph failed',
        });
      }
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json({
        ok: false,
        data: 'Missing parameters',
      });
    }
  }

  @Post('/delete')
  async deleteParagraph(@Body() post: deleteParagraphDto, @Res() res: express.Response): Promise<any> {
    if (post?.uuid) {
      try {
        const deleteParagraph = await this.paragraphService.delete(post.uuid);
        return res.status(deleteParagraph.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(deleteParagraph);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Deleting paragraph failed',
        });
      }
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json({
        ok: false,
        data: 'Missing parameters',
      });
    }
  }
}
