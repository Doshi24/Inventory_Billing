import express from 'express';
import cors from "cors"

//express
const main = express();
main.use(express.json());
//cors
main.use(cors())

//import routes
import router from './routes/product.route.js';

//route use 

main.use('/products', router);
main.use('/product', router);// for search
main.use('/product', router);// for select
main.use('/Product', router);// for update
main.use('products',router); // for display
export default main;