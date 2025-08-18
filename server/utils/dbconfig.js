import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import logger from './logger.js';
dotenv.config({
    path:'./.env'
});

const connectdb = async () => {
    logger.info("Connecting to the database...");
try {
    const connection =  await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    })
    logger.info("Database connected successfully");
} catch (error) {
console.error("Error connecting to the database:", error);    
}}


export default connectdb;