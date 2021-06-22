import { ProductModel } from '../../../../domain/models';

export interface LoadProductsRepository {
  loadAll: (accountId: string) => Promise<LoadProductsRepository.Result>;
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace LoadProductsRepository {
  export type Result = ProductModel[];
}
