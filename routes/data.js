const express = require('express')
const router = express.Router()
const data = require("../data/data")

router.get("/data", (req, res) => {
    res.send(data);
})

module.exports = router