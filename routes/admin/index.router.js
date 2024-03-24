import routerModules from './module.router.js';

const routerAdmin = (app) => {
  app.use(`${app.locals.prefixAdmin}/dashboard`, routerModules.dashboardRouter);
  app.use(`${app.locals.prefixAdmin}/products`, routerModules.productRouter);
};

export default routerAdmin;
