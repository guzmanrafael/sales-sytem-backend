import { AddProduct } from '../../../../domain/usecases';

export interface AddProductRepository {
  add: (data: AddProductRepository.Params) => Promise<void>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AddProductRepository {
  export type Params = AddProduct.Params;
}
