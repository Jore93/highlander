import {Sequelize, DataTypes} from 'sequelize';

import Education, {educationAttributes} from './education';
import Language, {languageAttributes} from './languages';
import Paragraph, {paragraphAttributes} from './paragraphs';
import Position, {positionAttributes} from './positions';
import User, {userAttributes} from './user';
import Workhistory, {workhistoryAttributes} from './workhistory';

export const sequelize = new Sequelize(
      process.env.DB_NAME || '',
      process.env.DB_USER || '',
      process.env.DB_PASS || '',
      {
        dialect: 'mysql',
        host: process.env.DB_HOST,
      }
    );

export default class DB {
  constructor() {
    const options = {sequelize};
    Education.init(educationAttributes, options);
    Language.init(languageAttributes, options);
    Paragraph.init(paragraphAttributes, options);
    Position.init(positionAttributes, options);
    User.init(userAttributes, options);
    Workhistory.init(workhistoryAttributes, options);
  }

  init = async (): Promise<any> => {
    await sequelize.sync();
  };
}

