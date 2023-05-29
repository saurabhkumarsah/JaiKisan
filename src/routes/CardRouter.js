const express = require("express")
const CardController = require('../controllers/CardController')

const router = express.Router()

// Testing Router
router.get('/test', (req, res) => {
    res.send({ status: true, message: "Successfull" })
})

router.post('/cards', CardController.createCard)
router.get('/cards', CardController.getCard)





module.exports = router