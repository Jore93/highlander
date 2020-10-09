import {Model, Optional, DataTypes} from 'sequelize';

interface PositionAttributes {
  uuid: string;
  position: string;
  duration: string;
  organisation: string;
}
type PositionCreationAttributes = Optional<PositionAttributes, 'uuid'>;

export default class Position extends Model<PositionAttributes, PositionCreationAttributes> implements PositionAttributes {
  public uuid!: string;
  public position!: string;
  public duration!: string;
  public organisation!: string;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
};

export const positionAttributes = {
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  organisation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
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
export const readPosition = async (where?: Record<string, string>, readAll = true): Promise<any> => {
  let positions: Position[];
  try {
    if (readAll) {
      positions = await Position.findAll();
    } else {
      // Filter undefined values
      Object.keys(where).forEach(key => where[key] === undefined && delete where[key]);
      positions = await Position.findAll({where});
    }
    return {
      ok: true,
      data: positions.map((position: any) => {
      return position.dataValues;
    })};
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
