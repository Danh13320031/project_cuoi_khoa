const dashboard = (request, response, next) => {
  response.render('admin/pages/dashboard/dashboard.view.ejs', {
    pageTitle: 'Dashboard Page',
  });
};

const dashboardController = {
  dashboard,
};

export default dashboardController;
