import {Controller, Post, Body, Res, HttpStatus} from '@nestjs/common';
import express from 'express';

import {WorkhistoryService} from './workhistory.service';
import {createWorkhistoryDto, deleteWorkhistoryDto, readWorkhistoryDto, updateWorkhistoryDto} from 'src/dto/workhistory.dto';
import {ApiTags} from '@nestjs/swagger';

@ApiTags('Workhistory')
@Controller('workhistory')
export class WorkhistoryController {
  constructor(private readonly workhistoryService: WorkhistoryService) {};

  @Post('/create')
  async createWorkhistory(@Body() post: createWorkhistoryDto, @Res() res: express.Response): Promise<any> {
    if (post?.employer && post?.position && post?.duration) {
      try {
        const createdWorkhistory = await this.workhistoryService.create(post.employer, post.position, post.duration);
        return res.status(createdWorkhistory.ok ? HttpStatus.CREATED : HttpStatus.NOT_FOUND).json(createdWorkhistory);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Creating workhistory failed',
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
  async readWorkhistory(@Body() post: readWorkhistoryDto, @Res() res: express.Response): Promise<any> {
    if (post?.uuid || post?.employer || post?.position || post?.duration || post?.readAll !== undefined) {
      try {
        const readWorkhistory = await this.workhistoryService.read(post?.uuid, post?.employer, post?.position, post?.duration, post?.readAll);
        return res.status(readWorkhistory.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(readWorkhistory);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Reading workhistory failed',
        });
      }
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json({
        ok: false,
        data: 'Missing parameters',
      });
    }
  }

  @Post('/update')
  async updateWorkhistory(@Body() post: updateWorkhistoryDto, @Res() res: express.Response): Promise<any> {
    if (post?.uuid || post?.employer || post?.position || post?.duration) {
      try {
        const updatedWorkhistory = await this.workhistoryService.update(post?.uuid, post?.employer, post?.position, post.duration);
        return res.status(updatedWorkhistory.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(updatedWorkhistory);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Updating workhistory failed',
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
  async deleteWorkhistory(@Body() post: deleteWorkhistoryDto, @Res() res: express.Response): Promise<any> {
    if (post?.uuid) {
      try {
        const deleteWorkhistory = await this.workhistoryService.delete(post.uuid);
        return res.status(deleteWorkhistory.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(deleteWorkhistory);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Deleting workhistory failed',
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
