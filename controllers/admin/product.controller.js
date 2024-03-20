import productModel from '../../models/admin/product.model.js';

const index = async (request, response, next) => {
  try {
    const productListData = await productModel.find({});

    response.status(200);
    response.render('admin/pages/product/product.view.ejs', {
      pageTitle: 'Product Page',
      productListData,
    });
  } catch (error) {
    console.log(error);
  }
};

const productController = {
  index,
};

export default productController;
