import {Model, Optional, DataTypes} from 'sequelize';

interface LanguageAttributes {
  uuid: string;
  language: string;
  level: string;
}
type LanguageCreationAttributes = Optional<LanguageAttributes, 'uuid'>;

export default class Language extends Model<LanguageAttributes, LanguageCreationAttributes> implements LanguageAttributes {
  public uuid!: string;
  public language!: string;
  public level!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
};

export const languageAttributes = {
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
};

export const createLanguage = async (langObj: LanguageAttributes): Promise<any> => {
  try {
    const newLanguage: any = await Language.create(langObj);
    return {
      ok: true,
      data: newLanguage.dataValues,
    };
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      data: `Creation failed: ${err.errors[0].message}`
    };
  }
};
export const readLanguage = async (where?: Record<string, string>, readAll?: boolean): Promise<any> => {
  let langs: Language[];
  try {
    if (readAll) {
      langs = await Language.findAll();
    } else {
      // Filter undefined values
      Object.keys(where).forEach(key => where[key] === undefined && delete where[key]);
      langs = await Language.findAll({where});
    }
    return {
      ok: true,
      data: langs.map((lang: any) => {
      return lang.dataValues;
    })};
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      data: `Reading failed: ${err.errors[0].message}`
    };
  }
};

export const updateLanguage = async (uuid: string, language?: string, level?: string): Promise<any> => {
  try {
    const updatedLang = await Language.update({language, level}, {where: {uuid}});
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
export const deleteLanguage = async (uuid: string): Promise<any> => {
  try {
    const deletedLang = await Language.destroy({where: {uuid}});
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
