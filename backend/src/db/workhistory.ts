import {Model, Optional, DataTypes} from 'sequelize';

interface WorkhistoryAttributes {
  uuid: string;
  employer: string;
  position: string;
  duration: string
}
interface WorkhistoryCreationAttributes extends Optional<WorkhistoryAttributes, 'uuid'> {};

export default class Workhistory extends Model<WorkhistoryAttributes, WorkhistoryCreationAttributes> implements WorkhistoryAttributes {
  public uuid!: string;
  public employer!: string;
  public position!: string;
  public duration!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
};

export const workhistoryAttributes = {
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  employer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

export const createWorkhistory = async (workObj: WorkhistoryAttributes): Promise<any> => {
  try {
    const newWorkhistory: any = await Workhistory.create(workObj);
    return {
      ok: true,
      data: newWorkhistory.dataValues,
    };
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      data: `Creation failed: ${err.errors[0].message}`
    };
  }
};
export const readWorkhistory = async (uuid?: string, readAll: boolean = true): Promise<any> => {
  try {
    if (readAll) {
      const langs = await Workhistory.findAll();
      return {
        ok: true,
        data: langs.map((lang: any) => {
        return lang.dataValues;
      })};
    } else {
      const lang: any = await Workhistory.findOne({where: {uuid}});
      return {
        ok: true,
        data: lang.dataValues,
      };
    }
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      data: `Reading failed: ${err.errors[0].message}`
    };
  }
};

export const updateWorkhistory = async (uuid: string, employer?: string, position?: string, duration?: string): Promise<any> => {
  try {
    const updatedLang = await Workhistory.update({employer, position, duration}, {where: {uuid}});
    return {
      ok: true,
      data: updatedLang
    };
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      data: `Update failed: ${err.errors[0].message}`,
    };
  }
};
export const deleteWorkhistory = async (uuid: string): Promise<any> => {
  try {
    const deletedLang = await Workhistory.destroy({where: {uuid}});
    return {
      ok: true,
      data: deletedLang
    }
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      data: `Deletion failed: ${err.errors[0].message}`
    };
  }
};
