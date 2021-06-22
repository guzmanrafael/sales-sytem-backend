import { AddProductRepository, LoadProductsRepository } from '../../../data/protocols/db';
import Product from './product-schema';

export class ProductMysqlRepository implements AddProductRepository, LoadProductsRepository {
  async add(accountData: AddProductRepository.Params): Promise<void> {
    try {
    } catch (error) {
      console.log(error);
    }
  }

  async loadAll(): Promise<LoadProductsRepository.Result> {
    try {
      const collection: any = await Product.findAll();
      return collection;
    } catch (error) {
      console.log(error);
    }
  }
}
