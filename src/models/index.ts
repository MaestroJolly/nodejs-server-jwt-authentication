import { Sequelize } from 'sequelize-typescript';
const env = process.env.NODE_ENV || 'development';
import { config } from '../config/config';
import User from './user.model';

const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, dbConfig);

sequelize.addModels([User]);

export default sequelize;
