import express from 'express';
import productController from '../../controllers/admin/product.controller.js';
const productRouter = express.Router();

productRouter.get('/', productController.index);

export default productRouter;
