const CustomerModel = require("../models/CustomerModel")
const cardModel = require("../models/cardModel")

const createCard = async (req, res) => {
    try {
        const data = req.body
        const { cardNumber, cardType, customerNumber, status, vision, customerId } = data
        if (cardType !== "REGULAR" && cardType !== "SPECIAL") return res.status(404).send({ Status: false, Message: "Please, write Card Type REGULAR or SPECIAL" })
        if (!cardNumber) return res.status(404).send({ Status: false, Message: "Please, Provide Card Number" })
        if (!customerNumber) return res.status(404).send({ Status: false, Message: "Please, Provide Customer Number" })
        if (status !== "ACTIVE" && status !== "INACTIVE" && status !== undefined) return res.status(404).send({ Status: false, Message: "Please, write status ACTIVE or INACTIVE" })
        if (!vision) return res.status(404).send({ Status: false, Message: "Please, Provide Vision" })
        if (!customerId) return res.status(404).send({ Status: false, Message: "Please, Provide Customer ID" })
        const isvalidCustomerId = await CustomerModel.find({ customerId: customerId })
        if (isvalidCustomerId.length == 0) return res.status(404).send({ Status: false, Message: "Please, Provide valid Customer Id" })


        const saveData = await cardModel.create(data)
        res.status(200).send({ Status: true, Data: saveData })
    } catch (error) {
        res.status(500).send({ Status: false, Message: error.message })
    }
}

const getCard = async (req, res) => {

    try {
        const data = await cardModel.find()
        if (data.length == 0) return res.status(404).send({ Status: false, Message: "Not found any card details" })
        res.status(200).send({ Status: true, Data: data })
    } catch (error) {
        res.status(500).send({ Status: false, Message: error.message })
    }

}

module.exports.createCard = createCard
module.exports.getCard = getCard

