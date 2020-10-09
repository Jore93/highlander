import {Injectable} from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';

import {createParagraph, deleteParagraph, readParagraph, updateParagraph} from 'src/db/paragraphs';

@Injectable()
export class ParagraphService {
  create = async (title: string, content: string): Promise<any> => {
    const uuid: string = uuidv4();
    const paragraphObj = {uuid, title, content}
    return await createParagraph(paragraphObj);
  };

  read = async (uuid?: string, title?: string, content?: string, readAll?: boolean): Promise<any> => {
    return await readParagraph({uuid, title, content}, readAll);
  };

  update = async (uuid: string, title?: string, content?: string): Promise<any> => {
    return await updateParagraph(uuid, title, content);
  };

  delete = async (uuid: string): Promise<any> => {
    return await deleteParagraph(uuid);
  };
}
