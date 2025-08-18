import connectdb from "./utils/dbconfig.js";

connectdb().then(()=>{
    try {
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error during database connection:", error);
    }
})