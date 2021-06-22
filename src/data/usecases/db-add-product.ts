import { AddProduct } from '../../domain/usecases';
import { AddProductRepository } from '../../data/protocols/db';

export class DbAddProduct implements AddProduct {
  constructor(private readonly addSurveyRepository: AddProductRepository) {}

  async add(data: AddProduct.Params): Promise<void> {
    await this.addSurveyRepository.add(data);
  }
}
