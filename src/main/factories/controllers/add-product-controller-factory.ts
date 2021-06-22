import { makeAddProductValidation, makeDbAddProduct } from '../../../main/factories';
import { Controller } from '../../../presentation/protocols';
import { AddProductController } from '../../../presentation/controllers';

export const makeAddProductController = (): Controller => {
  const controller = new AddProductController(makeAddProductValidation(), makeDbAddProduct());
  return controller;
};
