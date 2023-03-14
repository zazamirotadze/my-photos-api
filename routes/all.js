const express = require('express')
const router = express.Router()
const allData = require("../data/allData")

router.get("/all", (req, res) => {
    res.send(allData);
})

module.exports = router