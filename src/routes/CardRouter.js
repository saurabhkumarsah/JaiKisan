const express = require("express")
const { model } = require("mongoose")
const CardController = require('../controllers/CardController')

const router = express.Router()

// Testing Router
router.get('/test', (req, res) => {
    res.send({ status: true, message: "Successfull" })
})

router.post('/CreateCard', CardController.createCard)
router.get('/GetCard', CardController.getCard)

module.exports = router