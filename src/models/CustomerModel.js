const express = require("mongoose")
const { Schema, model } = mongoose

const customerSchema = Schema(
    {
        firstName: String,
        lastName: String,
        mobileNumber: String,
        DOB: Date,
        emailId: String,
        address: String,
        customerId: String,
        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE"]
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    }, { timestamp: true }
)

module.exports = model("Customer", customerSchema)