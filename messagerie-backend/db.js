import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('messagerie_backend', 'root', '', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false,
});

export default sequelize;