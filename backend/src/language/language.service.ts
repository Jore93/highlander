import {Injectable} from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';

import {createLanguage, deleteLanguage, readLanguage, updateLanguage} from 'src/db/languages';

@Injectable()
export class LanguageService {
  create = async (language: string, level: string) => {
    const uuid = uuidv4();
    const langObj = {uuid, language, level}
    return await createLanguage(langObj);
  };

  read = async (uuid?: string, readAll?: boolean) => {
    return uuid ? await readLanguage(uuid) : await readLanguage(uuid, readAll);
  };

  update = async (uuid: string, language?: string, level?: string) => {
    return await updateLanguage(uuid, language, level);
  };

  delete = async (uuid: string) => {
    return await deleteLanguage(uuid);
  };
}
