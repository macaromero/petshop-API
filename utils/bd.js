const mysql = require("mysql");
const util = require("util");

let pool = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    password: process.env.DB_PASS || "",
    user: process.env.DB_USER || "root",
    port: process.env.DB_PORT || 3306,
    database: process.env.DB_NAME || "petshop",
    connectionLimit: "10"
});

pool.query = util.promisify(pool.query);
module.exports = pool;





