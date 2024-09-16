const mongoose = require('mongoose')

const customerSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter the customer name"]
        },
        phone: {
            type: String,
            required: [true, "Please enter the customer phone number"]
        },
        email: {
            type: String,
            required: [true, "Please enter the customer email"]
        },
        gender: {
            type: String
        },
        dob: {
            type: Date
        }
    },
    {
        timestamps: true
    }
)

const customer = mongoose.model('Customer', customerSchema)
module.exports = customer;