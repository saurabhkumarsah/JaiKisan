const express = require("express")
const { model } = require("mongoose")
const router = express.Router()

router.get('/test', (req, res) => {
    res.send({ status: true, message: "Successfull" })
})

module.exports = router