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

export default main;