import {Model, Optional, DataTypes} from 'sequelize';

interface ParagraphAttributes {
  uuid: string;
  title: string;
  content: string;
}
type ParagraphCreationAttributes = Optional<ParagraphAttributes, 'uuid'>;

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
export const readParagraph = async (where?: Record<string, string>, readAll?: boolean): Promise<any> => {
  let paragraphs: Paragraph[];
  try {
    if (readAll) {
      paragraphs = await Paragraph.findAll();
    } else {
      // Filter undefined values
      Object.keys(where).forEach(key => where[key] === undefined && delete where[key]);
      paragraphs = await Paragraph.findAll({where});
    }
    return {
      ok: true,
      data: paragraphs.map((paragraph: any) => {
      return paragraph.dataValues;
    })};
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
