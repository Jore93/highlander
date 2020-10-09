import {Injectable} from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';

import {createEducation, deleteEducation, readEducation, updateEducation} from 'src/db/education';

@Injectable()
export class EducationService {
  create = async (name: string, place: string, duration: string): Promise<any> => {
    const uuid = uuidv4();
    const eduObj = {uuid, name, place, duration}
    return await createEducation(eduObj);
  };

  read = async (uuid?: string, name?: string, place?: string, duration?: string, readAll?: boolean): Promise<any> => {
    return await readEducation({uuid, name, place, duration}, readAll);
  };

  update = async (uuid: string, name?: string, place?: string, duration?: string): Promise<any> => {
    return await updateEducation(uuid, name, place, duration);
  };

  delete = async (uuid: string): Promise<any> => {
    return await deleteEducation(uuid);
  };
}
