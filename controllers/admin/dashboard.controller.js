const dashboard = (request, response, next) => {
  response.render('admin/pages/dashboard/dashboard.view.ejs', {
    pageTitle: 'Tổng quan',
  });
};

const dashboardController = {
  dashboard,
};

export default dashboardController;
