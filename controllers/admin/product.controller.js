const index = (request, response, next) => {
  response.render('admin/pages/product/product.view.ejs', {
    pageTitle: 'Quản lý sản phẩm',
  });
};

const productController = {
  index,
};

export default productController;
