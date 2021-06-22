import { Controller, HttpResponse, Validation } from '../../presentation/protocols';
import { badRequest, serverError, noContent } from '../../presentation/helpers';
import { AddProduct } from '../../domain/usecases';

export class AddProductController implements Controller {
  constructor(private readonly validation: Validation, private readonly addProduct: AddProduct) {}

  async handle(request: AddProductController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);
      if (error) {
        return badRequest(error);
      }
      await this.addProduct.add({
        ...request,
      });
      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace AddProductController {
  export type Request = {
    name: string;
    description: string;
    price: number;
  };
}
