import express from 'express';
import dashboardController from '../../controllers/admin/dashboard.controller.js';
const dashboardRouter = express.Router();

dashboardRouter.get('/', dashboardController.dashboard);

export default dashboardRouter;
