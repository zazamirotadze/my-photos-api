require("dotenv").config()
const { MongoClient } = require("mongodb");

const connectionString = process.env.MONGO_URI

const client = new MongoClient(connectionString);

module.exports = client;