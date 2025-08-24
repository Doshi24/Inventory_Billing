import logger from "../utils/logger.js";
import { setnewproduct } from "../models/product.model.js";



const newproduct =  async (req, res) => {
let newproduct = setnewproduct
res.status(200).json({ message: "new product added", result : newproduct } );
logger.info("new product added"+JSON.stringify(newproduct) );

}
    // logger.info("Found new  product "+JSON.stringify(req.body));

    // let product = req.body;
    // logger.info("product details "+JSON.stringify(product));
    // let newproduct = await sql("insert into product1 (name, description, rs, qty) values ('"+product.name+"', '"+product.description+"','"+product.price+"','"+product.quantity+"')" )
    // res.status(200).json({ message: "new product added", result : product } );
    // logger.info("new product added"+JSON.stringify(newproduct) );



export default newproduct;