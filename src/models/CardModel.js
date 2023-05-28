const mongoose = require("mongoose")
const { Schema, model } = mongoose

const cardSchema = new Schema(
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
        customerId: {
            type: String,
            ref: "CustomerModel"
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    }, { timestamps: true }
)

module.exports = model("Card", cardSchema)
