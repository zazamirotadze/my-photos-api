const express = require('express')
const router = express.Router()
const flowersData = require("../data/flowersData")

router.get("/flowers", (req, res) => {
    res.send(flowersData);
})

module.exports = router