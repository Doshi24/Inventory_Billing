import express from 'express';
import { setnewproduct , searchproduct,selectproduct, Updateproduct, DisplayProduct,FilterProduct, DownloadProducts } from '../models/product.model.js';
import logger from '../utils/logger.js';

// router decalaration
const router = express.Router();
logger.info("Router called"+JSON.stringify(router));
router.route('/new').post(setnewproduct);
router.route('/search').get(searchproduct) /// fetch search product
router.route('/select/:product_code').get(selectproduct)//select product details
router.route('/update').post(Updateproduct)// update product details
router.route('/Display').get(DisplayProduct)// diplay products
router.route('/filter').get(FilterProduct);// filter product



// donwloads
router.route('/Download').get(DownloadProducts)
export default router;