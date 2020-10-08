import {Model, Optional, DataTypes} from 'sequelize';

interface ParagraphAttributes {
  uuid: string;
  title: string;
  content: string;
}
interface ParagraphCreationAttributes extends Optional<ParagraphAttributes, 'uuid'> {};

export default class Paragraph extends Model<ParagraphAttributes, ParagraphCreationAttributes> implements ParagraphAttributes {
  public uuid!: string;
  public title!: string;
  public content!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
};

export const paragraphAttributes = {
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
};

export const createParagraph = async (paragraphObj: ParagraphAttributes): Promise<any> => {
  try {
    const newParagraph: any = await Paragraph.create(paragraphObj);
    return {
      ok: true,
      data: newParagraph.dataValues,
    };
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      data: `Creation failed: ${err.errors[0].message}`
    };
  }
};
export const readParagraph = async (uuid?: string, readAll: boolean = true): Promise<any> => {
  try {
    if (readAll) {
      const langs = await Paragraph.findAll();
      return {
        ok: true,
        data: langs.map((lang: any) => {
        return lang.dataValues;
      })};
    } else {
      const lang: any = await Paragraph.findOne({where: {uuid}});
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

export const updateParagraph = async (uuid: string, title?: string, content?: string): Promise<any> => {
  try {
    const updatedLang = await Paragraph.update({title, content}, {where: {uuid}});
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
export const deleteParagraph = async (uuid: string): Promise<any> => {
  try {
    const deletedLang = await Paragraph.destroy({where: {uuid}});
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
