import { db } from '../infra/db/mysql/sequelize-helper';

const dbConnection = async () => {
  try {
    await db.authenticate();
    console.log('Data base MySQL Sequelize  \x1b[32m%s\x1b[0m', 'online');
    const app = (await import('../main/config/app')).default;
    app.listen(process.env.PORT, () => console.log(`Server running at http://localhost:${process.env.PORT}`));
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
dbConnection();
