const home = (request, response, next) => {
  response.render('client/pages/home/index.view.ejs', {
    pageTitle: 'Chủ',
  });
};

const homeController = {
  home,
};

export default homeController;
