const express = require('express')
const router = express.Router()
const data = require("../data")

router.get("/all", (req, res) => {
    res.send(data);
})

module.exports = router