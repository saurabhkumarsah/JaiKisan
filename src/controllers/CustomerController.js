const customerModel = require('../models/CustomerModel.js')

const getCustomerList = async (req,res) => {
    try {
        const data = await customerModel.find({ status: "ACTIVE" })
        res.status(200).send({ Status: true, Data: data })
    } catch (error) {
        res.status(500).send({Status: false, Message: error.message})
    }
}