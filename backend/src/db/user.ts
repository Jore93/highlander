import {Model, Optional, DataTypes} from 'sequelize';

interface UserAttributes {
  uuid: string;
  username: string;
  password: string;
  admin: boolean
}
type UserCreationAttributes = Optional<UserAttributes, 'uuid'>;

export default class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public uuid!: string;
  public username!: string;
  public password!: string;
  public admin!: boolean;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
};

export const userAttributes = {
  uuid: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
};

export const createUser = async (userObj: UserAttributes): Promise<any> => {
  try {
    const newUser: any = await User.create(userObj);
    return {
      ok: true,
      data: newUser.dataValues,
    };
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      data: `Creation failed: ${err.errors[0].message}`
    };
  }
};

export const readUser = async (where?: Record<string, string | boolean>, readAll?: boolean): Promise<any> => {
  let users: any;
  try {
    if (readAll) {
      users = await User.findAll();
    } else {
      // Filter undefined values
      Object.keys(where).forEach(key => where[key] === undefined && delete where[key]);
      users = await User.findAll({where});
    }
    return {
      ok: true,
      data: users.map((user: any) => {
        const userObj = user.dataValues;
        delete userObj['password'];
        return userObj;
      }),
    };
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      data: `Reading failed: ${err.errors[0].message}`
    };
  }
};

export const updateUser = async (uuid: string, username?: string, password?: string, admin?: boolean): Promise<any> => {
  try {
    const updatedLang = await User.update({username, password, admin}, {where: {uuid}});
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

export const deleteUser = async (uuid: string): Promise<any> => {
  try {
    const deletedLang = await User.destroy({where: {uuid}});
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
