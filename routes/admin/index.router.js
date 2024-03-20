import routerModules from './module.router.js';

const routerAdmin = (app) => {
  app.use(`${app.locals.PREFIX_ADMIN}/dashboard`, routerModules.dashboardRouter);
  app.use(`${app.locals.PREFIX_ADMIN}/products`, routerModules.productRouter);
};

export default routerAdmin;
