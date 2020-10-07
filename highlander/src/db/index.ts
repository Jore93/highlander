import {Sequelize, DataTypes} from 'sequelize';

import Language from './languages';

export const sequelize = new Sequelize(
      process.env.DB_NAME || '',
      process.env.DB_USER || '',
      process.env.DB_PASS || '',
      {
        dialect: 'mysql',
        host: process.env.DB_HOST,
        define: {
          freezeTableName: true,
        },
      }
    );

Language.init(
  {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    language: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    level: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
  }
);

export default class DB {
  init = async (): Promise<any> => {
    await sequelize.sync();
  };
}

