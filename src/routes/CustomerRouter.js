const express = require("express")
const router = express.Router()

router.get('/test1', (req, res) => {
    res.send({ status: true, message: "Yes Successfull" })
})

module.exports = router