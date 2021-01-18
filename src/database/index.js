import Sequelize from 'sequelize';
import dbConfig from '../config/database';
import Aluno from '../models/Aluno';

const models = [Aluno];
const connection = new Sequelize(dbConfig);

models.forEach((model) => model.init(connection));
