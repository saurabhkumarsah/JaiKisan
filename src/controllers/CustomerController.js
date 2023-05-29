const customerModel = require('../models/CustomerModel.js')
const moment = require('moment')
const { v4: uuidv4 } = require('uuid');
const validator = require("email-validator");



const createCustomer = async (req, res) => {
    try {

        const data = req.body
        let { firstName, lastName, mobileNumber, DOB, emailId, address, status } = req.body
        let isValidEmail = validator.validate(emailId);
        if (!firstName) return res.status(404).send({ Status: false, Message: "Please, Provide Your First Name" })
        if (!lastName) return res.status(404).send({ Status: false, Message: "Please, Provide Your Last Name" })
        if (!mobileNumber) return res.status(404).send({ Status: false, Message: "Please, Provide Your Mobile Number" })
        if (mobileNumber.length !== 10) return res.status(404).send({ Status: false, Message: "Please, Provide valid mobile number" })
        if (!DOB) return res.status(404).send({ Status: false, Message: "Please, Provide Your Date of Birth" })
        if (!emailId) return res.status(404).send({ Status: false, Message: "Please, Provide Your Email Id" })
        if (!isValidEmail) return res.status(404).send({ Status: false, Message: "Please, Provide valid Email Id" })
        if (!address) return res.status(404).send({ Status: false, Message: "Please, Provide Your Address" })
        data.customerId = uuidv4().toString()

        if (!status) return res.status(404).send({ Status: false, Message: "Please, Provide Status" })
        if ((status !== "ACTIVE") && (status !== "INACTIVE")) return res.status(404).send({ Status: false, Message: "Please, write status ACTIVE or INACTIVE" })

        const saveData = await customerModel.create(data)
        res.status(200).send({ Status: true, Message: "Customer Account Created Successfully", Data: saveData })

    } catch (error) {

        res.status(500).send({ Status: false, Message: error.message })

    }
}

const getCustomerList = async (req, res) => {
    try {

        const data = await customerModel.find({ status: "ACTIVE" })
        if (data.length === 0) return res.status(404).send({ Status: false, Message: "Not found any active customer" })
        res.status(200).send({ Status: true, Data: data })

    } catch (error) {

        res.status(500).send({ Status: false, Message: error.message })

    }
}

const deleteCustomer = async (req, res) => {
    try {

        const data = req.body
        const condition = Object.keys(data)
        if (condition.length === 0) return res.status(404).send({ Status: false, Message: "Please, Provide Detail of Custormer" })
        const saveData = await customerModel.updateMany(data, { isDeleted: true })
        if (saveData.modifiedCount === 0) return res.status(404).send({ Status: false, Message: "Data not found" })
        res.status(200).send({ Status: true, Message: "Customer Account Deleted Successfully" })

    } catch (error) {

        res.status(500).send({ Status: false, Message: error.message })

    }
}

module.exports.createCustomer = createCustomer
module.exports.getCustomerList = getCustomerList
module.exports.deleteCustomer = deleteCustomer