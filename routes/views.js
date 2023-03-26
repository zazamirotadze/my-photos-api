const express = require('express')
const router = express.Router()
const client = require("../client")

router.get("/views", async (req, res) => {
    const  collection =  client.db("photos-api").collection("views")
    let results = await collection.find({}).toArray();
    res.send(results[0]);
})

module.exports = router