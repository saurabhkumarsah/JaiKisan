const express = require("express")
const router = express.Router()
const controller = require("../controllers/CustomerController")
const { createCustomer, getCustomerList, deleteCustomer } = controller

// Router for testing
router.get('/test1', (req, res) => {
    res.send({ status: true, message: "Yes, Successfull" })
})

router.post('/customers', createCustomer)
router.get('/customers', getCustomerList)
router.delete('/customers', deleteCustomer)

module.exports = router