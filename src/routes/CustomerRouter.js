const express = require("express")
const router = express.Router()
const controller = require("../controllers/CustomerController")
const CustomerModel = require("../models/CustomerModel")
const { createCustomer, getCustomerList, deleteCustomer } = controller

// Router for testing
router.get('/test1', (req, res) => {
    res.send({ status: true, message: "Yes, Successfull" })
})
// router.delete('/delete', async (req,res) =>{
//    await CustomerModel.deleteMany()
//    res.end()
// })


router.post('/CreateCustomer', createCustomer)
router.get('/CustomerList', getCustomerList)
router.delete('/DeleteCustomer', deleteCustomer)

module.exports = router