const express = require("mongoose")
const { Schema, model } = mongoose

const cardSchema = Schema(
    {
        cardNumber: String,
        cardType: {
            type: String,
            enum: ["REGULAR", "SPECIAL"]
        },
        customerNumber: String,
        status: {
            type: String,
            enum: ["ACTIVE", "INACTIVE"],
            default: "ACTIVE"
        },
        vision: String,
        CustomerID: {
            type: String,
            ref: "CustomerModel"
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    }, { timestamp: true }
)

module.exports = model("Card", cardSchema)
