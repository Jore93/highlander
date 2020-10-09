import {Controller, Post, Body, Res, HttpStatus} from '@nestjs/common';
import express from 'express';
import {ApiTags} from '@nestjs/swagger';

import {UserService} from './user.service';
import {createUserDto, deleteUserDto, readUserDto, updateUserDto} from 'src/dto/user.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {};

  @Post('/create')
  async createUser(@Body() post: createUserDto, @Res() res: express.Response): Promise<any> {
    if (post?.username && post?.password && post?.admin !== undefined) {
      try {
        const createdUser = await this.userService.create(post.username, post.password, post.admin);
        return res.status(createdUser.ok ? HttpStatus.CREATED : HttpStatus.NOT_FOUND).json(createdUser);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Creating user failed',
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
  async readUser(@Body() post: readUserDto, @Res() res: express.Response): Promise<any> {
    if (post?.uuid || post?.username || post?.password || post?.admin !== undefined || post?.readAll !== undefined) {
      try {
        const readUser = await this.userService.read(post?.uuid, post?.username, post?.password, post?.admin, post?.readAll);
        return res.status(readUser.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(readUser);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Reading user failed',
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
  async updateUser(@Body() post: updateUserDto, @Res() res: express.Response): Promise<any> {
    if (post?.uuid || post?.username || post?.password || post?.admin) {
      try {
        const updatedUser = await this.userService.update(post?.uuid, post?.username, post?.password, post?.admin);
        return res.status(updatedUser.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(updatedUser);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Updating user failed',
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
  async deleteUser(@Body() post: deleteUserDto, @Res() res: express.Response): Promise<any> {
    if (post?.uuid) {
      try {
        const deleteUser = await this.userService.delete(post.uuid);
        return res.status(deleteUser.ok ? HttpStatus.OK : HttpStatus.NOT_FOUND).json(deleteUser);
      } catch (err) {
        console.error(err);
        return res.status(HttpStatus.NOT_FOUND).json({
          ok: false,
          data: 'Deleting user failed',
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

