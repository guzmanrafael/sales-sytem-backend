import { ProductModel } from '../../domain/models';

export interface AddProduct {
  add: (data: AddProduct.Params) => Promise<void>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AddProduct {
  export type Params = Omit<ProductModel, 'id'>;
}
