import productModel from '../../models/client/product.model.js';

const index = async (request, response, next) => {
  try {
    const productDataList = await productModel.find({
      status: 'active',
      deleted: false,
    });

    productDataList.forEach((productItem) => {
      productItem.newPrice =
        productItem.price - productItem.price * (productItem.discountPercentage / 100);
    });

    response.render('client/pages/product/product.view.ejs', {
      pageTitle: 'Trang danh sách sản phẩm',
      productDataList,
    });
  } catch (error) {
    response.status(404).json(error);
  }
};

const productController = {
  index,
};

export default productController;
