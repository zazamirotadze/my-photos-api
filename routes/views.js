const express = require('express')
const router = express.Router()
const viewsData = require("../data/viewsData")

router.get("/views", (req, res) => {
    res.send(viewsData);
})

module.exports = router