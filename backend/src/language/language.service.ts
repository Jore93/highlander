import {Injectable} from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';

import {createLanguage, deleteLanguage, readLanguage, updateLanguage} from 'src/db/languages';

@Injectable()
export class LanguageService {
  create = async (language: string, level: string): Promise<any> => {
    const uuid = uuidv4();
    const langObj = {uuid, language, level}
    return await createLanguage(langObj);
  };

  read = async (uuid?: string, language?: string, level?: string, readAll?: boolean): Promise<any> => {
    return await readLanguage({uuid, language, level}, readAll);
  };

  update = async (uuid: string, language?: string, level?: string): Promise<any> => {
    return await updateLanguage(uuid, language, level);
  };

  delete = async (uuid: string): Promise<any> => {
    return await deleteLanguage(uuid);
  };
}
