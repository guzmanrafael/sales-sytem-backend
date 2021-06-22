import { makeAddProductController } from '../../main/factories';

import { Router } from 'express';
import { adaptRoute } from '../adapters';

export default (router: Router): void => {
  router.post('/products', adaptRoute(makeAddProductController()));
  //router.get('/products', adaptRoute(makeLoadProductsController()));
};
