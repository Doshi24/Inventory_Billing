import logger from "../utils/logger.js";
const newproduct = (req, res) => {
    logger.info("New product added"+JSON.stringify(req.body));
    res.status(200).json({ message: "new product added" });
}


export default newproduct;