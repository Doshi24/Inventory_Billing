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

logger.info("search product function called");
const searchproduct = async (req, res) => {
    let searchcode = req.query;
    logger.info("search code "+JSON.stringify(searchcode));
    let qry = "";
try {
    if(!searchcode) return res.json({ message: "" });
    qry = await sql("select * from products where product_code like '%"+searchcode.query+"%'  ");
    logger.info("select * from products where product_code like '%"+searchcode.query+"%'  ")
    logger.info("search product "+JSON.stringify(qry));
    res.json(qry);
} catch (error) {
    logger.error("error in search product "+error);
}
}


const selectproduct = async (req, res) => {
    logger.info("select product function called");
    const product = req.params;
    logger.info("select product function called with param "+JSON.stringify(product));
    try {
        if(!product) return res.json({ message: "" });
        const qry = await sql("select * from products where product_code = '"+product.product_code+"'");
        logger.info("select * from products where product_code = '"+product.product_code+"'")
        logger.info("selected product details "+JSON.stringify(qry));
        res.json(qry[0]);
    } catch (error) {
        logger.error("error in select product "+error);
    }
}


const Updateproduct = async (req, res) => {
    const product = req.body;
    logger.info("update product function called with body "+JSON.stringify(product));
    try {
        if(!product || Object.keys(product).length === 0) return res.status(200).json({ message: "provide data to update" });
        //build qry

        const params = [];
        const valuess = [];

        for(const [keys,values] of Object.entries(product)){
            if(keys !== 'product_code'){
                logger.info("key "+keys+" value "+values);
                params.push(`${keys} = ?`);
                valuess.push(values);
            }
        }

        const qry = await sql(`update products set ${params.join(", ")} where product_code = ?`, [...valuess, product.product_code] );
        logger.info(`update products set ${params.join(", ")} where product_code = ?`);
        logger.info("product updated "+JSON.stringify(qry));
        res.status(200).json({ message: "product updated", result: product });
    } catch (error) {
        logger.error("error in update product "+error);
        res.status(500).json({ message: "internal server error" } );
    }
}
export { setnewproduct, searchproduct, selectproduct, Updateproduct };