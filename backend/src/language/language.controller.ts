import {Body, Controller, HttpStatus, Post, Res} from '@nestjs/common';
import {ApiTags} from '@nestjs/swagger';
import express from 'express';

import {LanguageService} from './language.service';
import {createLanguageDto, deleteLanguageDto, readLanguageDto, updateLanguageDto} from '../dto/language.dto';

@ApiTags('Language')
@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {};

  @Post('/create')
  async createLanguage(@Body() post: createLanguageDto, @Res() res: express.Response): Promise<any> {
    if (post?.language && post?.level) {
      try {
        const createdLang = await this.languageService.create(post.language, post.level);
        return res.status(createdLang.ok ? HttpStatus.CREATED : HttpStatus.NOT_FOUND).json(createdLang);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Creating language failed',
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
  async readLanguage(@Body() post: readLanguageDto, @Res() res: express.Response): Promise<any> {
    if (post?.uuid || post?.readAll) {
      try {
        const readLang = await this.languageService.read(post?.uuid, post?.readAll);
        return res.status(readLang.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(readLang);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Reading language failed',
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
  async updateLanguage(@Body() post: updateLanguageDto, @Res() res: express.Response): Promise<any> {
    if (post?.uuid) {
      try {
        const updatedLang = await this.languageService.update(post.uuid, post.language, post.level);
        return res.status(updatedLang.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(updatedLang);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Updating language failed',
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
  async deleteLanguage(@Body() post: deleteLanguageDto, @Res() res: express.Response): Promise<any> {
    if (post?.uuid) {
      try {
        const deleteLang = await this.languageService.delete(post.uuid);
        return res.status(deleteLang.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(deleteLang);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Deleting language failed',
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
