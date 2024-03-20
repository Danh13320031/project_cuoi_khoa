import routerModule from './module.router.js';

const routerClient = (app) => {
  app.use('/', routerModule.homeRouter);
  app.use('/products', routerModule.productRouter);
};

export default routerClient;
