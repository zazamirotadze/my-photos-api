const express = require('express')
const router = express.Router()
const client = require("../client")

router.get("/data/:id", async (req, res) => {
    const  collection =  client.db("photos-api").collection("all")
    let results = await collection.find({}).toArray();
    const foundItem = results[0].data.find(element => element.id == req.params.id  );
    if(foundItem){  res.send(foundItem); }
    else{ res.send("An item was not found"); }
})

module.exports = router