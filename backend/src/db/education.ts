import {Model, Optional, DataTypes} from 'sequelize';

interface EducationAttributes {
  uuid: string;
  name: string;
  place: string;
  duration: string
}
type EducationCreationAttributes = Optional<EducationAttributes, 'uuid'>;

export default class Education extends Model<EducationAttributes, EducationCreationAttributes> implements EducationAttributes {
  public uuid!: string;
  public name!: string;
  public place!: string;
  public duration!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
};

export const educationAttributes = {
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  place: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

export const createEducation = async (eduObj: EducationAttributes): Promise<any> => {
  try {
    const newEducation: any = await Education.create(eduObj);
    return {
      ok: true,
      data: newEducation.dataValues,
    };
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      data: `Creation failed: ${err.errors[0].message}`
    };
  }
};

export const readEducation = async (where?: Record<string, string>, readAll?: boolean): Promise<any> => {
  let education: Education[];
  try {
    if (readAll) {
      education = await Education.findAll();
    } else {
      // Filter undefined values
      Object.keys(where).forEach(key => where[key] === undefined && delete where[key]);
      education = await Education.findAll({where});
    }
    return {
      ok: true,
      data: education.map((education: any) => {
      return education.dataValues;
    })};
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      data: `Reading failed: ${err.errors[0].message}`
    };
  }
};

export const updateEducation = async (uuid: string, name?: string, place?: string, duration?: string): Promise<any> => {
  try {
    const updatedLang = await Education.update({name, place, duration}, {where: {uuid}});
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

export const deleteEducation = async (uuid: string): Promise<any> => {
  try {
    const deletedLang = await Education.destroy({where: {uuid}});
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
