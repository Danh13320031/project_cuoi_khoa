const home = (request, response, next) => {
  response.render('client/pages/home/index.view.ejs', {
    pageTitle: 'Trang chủ',
  });
};

const homeController = {
  home,
};

export default homeController;
