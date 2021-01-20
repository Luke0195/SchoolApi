import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 50],
            msg: 'O campo nome precisa ter entre 3 a 50 caracteres',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [4, 255],
            msg: 'O Campo sobrenome precisa ter entre 4 a 255 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Por favor informe um email valido!',
          },
        },
      },

      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'O campo Idade precisa ser um número inteiro',
          },
        },

      },

      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'O campo Peso precisa ser um número flutuante exemplo: 68.81',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        isFloat: {
          msg: 'O campo Altura precisa ser um número flutuante exemplo: 1.75',
        },
      },
    }, { sequelize });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: 'aluno_id' });
  }
}
