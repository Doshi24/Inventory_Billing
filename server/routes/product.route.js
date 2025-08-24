import express from 'express';
import { setnewproduct } from '../models/product.model.js';
import logger from '../utils/logger.js';

// router decalaration
const router = express.Router();
logger.info("Router called"+JSON.stringify(router));
router.route('/new').post(setnewproduct);

export default router;