import logger from "../utils/logger.js";
import {sql } from "../utils/dbconfig.js";

const setnewproduct = async (req, res) => {
    let product = req.body;
    const date = new Date();
    logger.info("product details "+JSON.stringify(product));
    let newproduct = await sql("insert into products (product_code, name, description, per_unit_price, tax_rate, category_id, brand_id, unit_of_measure, tax_code_id) values ('"+product.product_code+"', '"+product.name+"','"+product.description+"','"+product.per_unit_price+"','"+product.tax_rate+"','"+product.tax_code_id+"','"+product.category_id+"','"+product.brand_id+"','"+product.unit_of_measure+"' )" )
    
    res.status(200).json({ message: "new product added", result : product } );
    logger.info("new product added"+JSON.stringify(newproduct) );
}

export { setnewproduct };