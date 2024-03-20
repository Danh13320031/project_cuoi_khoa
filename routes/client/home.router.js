import express from 'express';
import homeController from '../../controllers/client/home.controller.js';
const homeRouter = express.Router();

homeRouter.get('/', homeController.home);

export default homeRouter;
