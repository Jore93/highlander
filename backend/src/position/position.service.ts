import {Injectable} from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';

import {createPosition, deletePosition, readPosition, updatePosition} from 'src/db/positions';

@Injectable()
export class PositionService {
  create = async (position: string, duration: string, organisation: string): Promise<any> => {
    const uuid = uuidv4();
    const positionObj = {uuid, position, duration, organisation}
    return await createPosition(positionObj);
  };

  read = async (uuid?: string, position?: string, duration?: string, organisation?: string, readAll?: boolean): Promise<any> => {
    return await readPosition({uuid, position, duration, organisation}, readAll);
  };

  update = async (uuid: string, position?: string, duration?: string, organisation?: string): Promise<any> => {
    return await updatePosition(uuid, position, duration, organisation);
  };

  delete = async (uuid: string): Promise<any> => {
    return await deletePosition(uuid);
  };
};
