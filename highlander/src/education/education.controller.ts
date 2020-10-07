import {Body, Controller, HttpStatus, Post, Res} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import express from 'express';

import {EducationService} from './education.service';
import {createEducationDto, deleteEducationDto, readEducationDto, updateEducationDto} from '../dto/education.dto';

@ApiTags('Education')
@Controller('education')
export class EducationController {
  constructor(private readonly educationService: EducationService) {}

  @Post('/create')
  async createEducation(@Body() post: createEducationDto, @Res() res: express.Response): Promise<any> {
    if (post?.name && post?.place && post?.duration) {
      try {
        const createdEdu = await this.educationService.create(post.name, post.place, post.duration);
        return res.status(createdEdu.ok ? HttpStatus.CREATED : HttpStatus.NOT_FOUND).json(createdEdu);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Creating education failed',
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
  async readEducation(@Body() post: readEducationDto, @Res() res: express.Response): Promise<any> {
    try {
      if (post?.uuid || post?.readAll) {
        const readEdu = await this.educationService.read(post?.uuid, post?.readAll);
        return res.status(readEdu.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(readEdu);
      } else {
        return res.status(HttpStatus.BAD_REQUEST).json({
          ok: false,
          data: 'Need to post either uuid and/or readAll',
        });
      }
    } catch (err) {
      console.error(err);
      return res.status(HttpStatus.NOT_FOUND).json({
        ok: false,
        data: 'Reading education failed',
      });
    }
  }

  @Post('/update')
  async updateEducation(@Body() post: updateEducationDto, @Res() res: express.Response): Promise<any> {
    if (post?.uuid) {
      try {
        const updatedEdu = await this.educationService.update(post.uuid, post.name, post.place, post.duration);
        return res.status(updatedEdu.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(updatedEdu);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Updating education failed',
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
  async deleteEducation(@Body() post: deleteEducationDto, @Res() res: express.Response): Promise<any> {
    if (post?.uuid) {
      try {
        const deleteEdu = await this.educationService.delete(post.uuid);
        return res.status(deleteEdu.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(deleteEdu);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Deleting education failed',
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
