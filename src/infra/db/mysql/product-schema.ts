import { DataTypes } from 'sequelize';
import { db } from './sequelize-helper';

const Product = db.define('Product', {
  nombre: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING },
  status: { type: DataTypes.BOOLEAN },
});

export default Product;
