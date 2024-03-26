import routerModules from './module.router.js';

const routerAdmin = (app) => {
  const PRE_ADMIN = app.locals.prefixAdmin;

  app.use(`${PRE_ADMIN}/dashboard`, routerModules.dashboardRouter);
  app.use(`${PRE_ADMIN}/products`, routerModules.productRouter);
};

export default routerAdmin;
