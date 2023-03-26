const express = require('express')
const router = express.Router()
const client = require("../client")

router.get("/other", async (req, res) => {
    const  collection =  client.db("photos-api").collection("other")
    let results = await collection.find({}).toArray();
    res.send(results[0]);
})

module.exports = router