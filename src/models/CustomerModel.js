const mongoose = require("mongoose")
const { Schema, model } = mongoose

const customerSchema = new Schema(
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
    }, { timestamps: true }
)

module.exports = model("Customer", customerSchema)