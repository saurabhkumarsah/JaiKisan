const CustomerModel = require("../models/CustomerModel")
const cardModel = require("../models/cardModel")

const createCard = async (req, res) => {
    try {
        const data = req.body
        let { cardType, customerNumber, status, vision, customerId } = data
        
        // Auto Increment Card Number -------------------------------------------------------------------------------------------------------------------
        const fetchData = await cardModel.find().select({ _id: 0, cardNumber: 1 })
        if (fetchData.length === 0) {
            data.cardNumber = "C001"
        } else {
            const cN = fetchData[fetchData.length - 1].cardNumber
            let val = cN
            let numericPart = parseInt(val.slice(1));
            let incrementedNumericPart = numericPart + 1;
            let incrementedString = val[0] + incrementedNumericPart.toString().padStart(3, '0');
            data.cardNumber = incrementedString
        }
        // ----------------------------------------------------------------------------------------------------------------------------------------------
        if (!cardNumber) return res.status(404).send({ Status: false, Message: "Please, Provide Card Number" })
        if (cardType !== "REGULAR" && cardType !== "SPECIAL") return res.status(404).send({ Status: false, Message: "Please, write Card Type REGULAR or SPECIAL" })
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

