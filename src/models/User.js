import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({

      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 55],
            msg: '  O campo nome precisa ter entre 3 a 55 caracteres',
          },
        },
      },

      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Por favor informe o email válido ',
          },
        },
      },

      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },

      password: {
        type: Sequelize.VIRTUAL,
        defautlValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: ' A senha precisa ter entre 6 a 50 caracteres',
          },
        },
      },
    },

    { sequelize });

    this.addHook('beforeSave', async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });
    return this;
  }
}
