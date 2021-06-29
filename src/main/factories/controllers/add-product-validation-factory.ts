import { ValidationComposite, RequiredFieldValidation } from '../../../validation/validators';
import { Validation } from '../../../presentation/protocols';

export const makeAddProductValidation = (): ValidationComposite => {
  const validations: Validation[] = [];
  for (const field of ['name', 'price']) {
    validations.push(new RequiredFieldValidation(field));
  }
  return new ValidationComposite(validations);
};
