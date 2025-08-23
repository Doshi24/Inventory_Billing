import express from 'express';
import newproduct from '../controller/product.controller.js'
import logger from '../utils/logger.js';

// router decalaration
const router = express.Router();
logger.info("Router called"+JSON.stringify(router));
router.route('/new').post(newproduct);

export default router;