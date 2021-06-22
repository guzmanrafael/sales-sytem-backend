import { AddProduct } from '../../../domain/usecases';
import { ProductMysqlRepository } from '../../../infra/db/mysql';
import { DbAddProduct } from '../../../data/usecases';

export const makeDbAddProduct = (): AddProduct => {
  const surveyMongoRepository = new ProductMysqlRepository();
  return new DbAddProduct(surveyMongoRepository);
};
