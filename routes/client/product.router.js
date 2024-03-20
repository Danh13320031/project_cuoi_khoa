import productController from '../../controllers/client/product.controller.js';
import express from 'express';
const productRouter = express.Router();

productRouter.get('/', productController.index);

export default productRouter;
