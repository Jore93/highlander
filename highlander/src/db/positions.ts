import {Model, Optional} from 'sequelize';

interface PositionAttributes {
  uuid: string;
  position: string;
  duration: string;
  organisation: string;
}
interface PositionCreationAttributes extends Optional<PositionAttributes, 'uuid'> {};

export default class Position extends Model<PositionAttributes, PositionCreationAttributes> implements PositionAttributes {
  public uuid!: string;
  public position!: string;
  public duration!: string;
  public organisation!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
};


export const createPosition = async (positionObj: PositionAttributes): Promise<any> => {
  try {
    const newPosition: any = await Position.create(positionObj);
    return {
      ok: true,
      data: newPosition.dataValues,
    };
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      data: `Creation failed: ${err.errors[0].message}`
    };
  }
};
export const readPosition = async (uuid?: string, readAll: boolean = true): Promise<any> => {
  try {
    if (readAll) {
      const langs = await Position.findAll();
      return {
        ok: true,
        data: langs.map((lang: any) => {
        return lang.dataValues;
      })};
    } else {
      const lang: any = await Position.findOne({where: {uuid}});
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

export const updatePosition = async (uuid: string, position?: string, duration?: string, organisation?: string): Promise<any> => {
  try {
    const updatedLang = await Position.update({position, duration, organisation}, {where: {uuid}});
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
export const deletePosition = async (uuid: string): Promise<any> => {
  try {
    const deletedLang = await Position.destroy({where: {uuid}});
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
