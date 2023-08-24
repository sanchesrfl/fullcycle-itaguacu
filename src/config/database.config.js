const {config} = require("dotenv");
config();

module.exports = {
dialect : process.env.DB_DIALECT || "postgresql",
host : process.env.DB_HOST || "localhost",
username : process.env.DB_USERNAME || "postgres",
password : process.env.DB_PASSWORD || "postgres",
database : process.env.DB_DATABASE || "db_name",
port : process.env.DB_PORT || 3000,

}