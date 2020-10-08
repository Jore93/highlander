import {Injectable} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import {v4 as uuidv4} from 'uuid';

import {createUser, deleteUser, readUser, updateUser} from 'src/db/user';

@Injectable()
export class UserService {
  create = async (username: string, password: string, admin: boolean) => {
    const uuid = uuidv4();
    const hashedPwd: string = await bcrypt.hash(password, 12);
    const userObj = {uuid, username, password: hashedPwd, admin}
    return await createUser(userObj);
  };

  read = async (uuid?: string, username?: string, password?: string, admin?: boolean) => {
    return await readUser({uuid, username, password, admin});
  };

  update = async (uuid: string, username?: string, password?: string, admin?: boolean) => {
    return await updateUser(uuid, username, password, admin);
  };

  delete = async (uuid: string) => {
    return await deleteUser(uuid);
  };
}
