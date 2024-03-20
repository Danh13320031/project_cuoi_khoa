const index = (request, response, next) => {
  response.render('client/pages/product/product.view.ejs', {
    pageTitle: 'Trang danh sách sản phẩm',
  });
};

const productController = {
  index,
};

export default productController;
