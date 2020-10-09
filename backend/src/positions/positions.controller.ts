import {Controller, Post, Body, Res, HttpStatus} from '@nestjs/common';
import express from 'express';
import {ApiTags} from '@nestjs/swagger';

import {PositionsService} from './positions.service';
import {createPositionDto, deletePositionDto, readPositionDto, updatePositionDto} from 'src/dto/positions.dto';

@ApiTags('Position')
@Controller('positions')
  export class PositionsController {
    constructor(private readonly positionService: PositionsService) {};

  @Post('/create')
  async createPosition(@Body() post: createPositionDto, @Res() res: express.Response): Promise<any> {
    if (post?.position && post?.duration && post?.organisation) {
      try {
        const createdPosition = await this.positionService.create(post.position, post.duration, post.organisation);
        return res.status(createdPosition.ok ? HttpStatus.CREATED : HttpStatus.NOT_FOUND).json(createdPosition);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Creating position failed',
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
  async readPosition(@Body() post: readPositionDto, @Res() res: express.Response): Promise<any> {
    if (post?.uuid || post?.position || post?.duration || post?.organisation || post?.readAll !== undefined) {
      try {
        const readPosition = await this.positionService.read(post?.uuid, post?.position, post?.duration, post?.organisation, post?.readAll);
        return res.status(readPosition.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(readPosition);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Reading position failed',
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
  async updatePosition(@Body() post: updatePositionDto, @Res() res: express.Response): Promise<any> {
    if (post?.uuid || post?.position || post?.duration || post?.organisation) {
      try {
        const updatedPosition = await this.positionService.update(post?.uuid, post?.position, post?.duration, post.organisation);
        return res.status(updatedPosition.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(updatedPosition);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Updating position failed',
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
  async deletePosition(@Body() post: deletePositionDto, @Res() res: express.Response): Promise<any> {
    if (post?.uuid) {
      try {
        const deletePosition = await this.positionService.delete(post.uuid);
        return res.status(deletePosition.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(deletePosition);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Deleting position failed',
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
