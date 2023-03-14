const express = require('express')
const router = express.Router()
const otherData = require("../data/otherData")

router.get("/other", (req, res) => {
    res.send(otherData);
})

module.exports = router