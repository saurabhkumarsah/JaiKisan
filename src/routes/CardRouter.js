const express = require("express")
const CardController = require('../controllers/CardController')
const cardModel = require("../models/cardModel")

const router = express.Router()

// Testing Router
router.get('/test', (req, res) => {
    res.send({ status: true, message: "Successfull" })
})
// router.delete('/delete', async (req,res) => {
//     await cardModel.deleteMany()
//     res.end()
// })

router.post('/CreateCard', CardController.createCard)
router.get('/GetCard', CardController.getCard)





module.exports = router