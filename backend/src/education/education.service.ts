import {Injectable} from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';

import {createEducation, deleteEducation, readEducation, updateEducation} from 'src/db/education';

@Injectable()
export class EducationService {
  create = async (name: string, place: string, duration: string) => {
    const uuid = uuidv4();
    const eduObj = {uuid, name, place, duration}
    return await createEducation(eduObj);
  };

  read = async (uuid?: string, readAll?: boolean) => {
    return uuid ? await readEducation(uuid) : await readEducation(uuid, readAll);
  };

  update = async (uuid: string, name?: string, place?: string, duration?: string) => {
    return await updateEducation(uuid, name, place, duration);
  };

  delete = async (uuid: string) => {
    return await deleteEducation(uuid);
  };
}
