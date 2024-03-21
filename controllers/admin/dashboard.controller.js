const dashboard = (request, response, next) => {
  response.render('admin/pages/dashboard/dashboard.view.ejs', {
    pageTitle: 'Trang tổng quan',
  });
};

const dashboardController = {
  dashboard,
};

export default dashboardController;
