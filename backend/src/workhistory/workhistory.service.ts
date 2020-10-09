import {Injectable} from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';

import {createWorkhistory, deleteWorkhistory, readWorkhistory, updateWorkhistory} from 'src/db/workhistory';

@Injectable()
export class WorkhistoryService {  create = async (employer: string, position: string, duration: string): Promise<any> => {
  const uuid = uuidv4();
  const workhistoryObj = {uuid, employer, position, duration}
  return await createWorkhistory(workhistoryObj);
};

read = async (uuid?: string, employer?: string, position?: string, duration?: string, readAll?: boolean): Promise<any> => {
  return await readWorkhistory({uuid, employer, position, duration}, readAll);
};

update = async (uuid: string, employer?: string, position?: string, duration?: string): Promise<any> => {
  return await updateWorkhistory(uuid, employer, position, duration);
};

delete = async (uuid: string): Promise<any> => {
  return await deleteWorkhistory(uuid);
};
}
