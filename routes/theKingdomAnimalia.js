const express = require('express')
const router = express.Router()
const theKingdomAnimaliaData = require("../data/theKingdomAnimaliaData")

router.get("/theKingdomAnimalia", (req, res) => {
    res.send(theKingdomAnimaliaData);
})

module.exports = router