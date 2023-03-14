const express = require('express')
const router = express.Router()
const allData = require("../data/allData")

router.get("/data/:id", (req, res) => {
    const foundItem = allData.data.find(element => element.id == req.params.id  );
    if(foundItem){  res.send(foundItem); }
    else{ res.send("An item was not found"); }
})

module.exports = router