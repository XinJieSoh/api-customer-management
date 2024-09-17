const mongoose = require('mongoose');

const authSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Please enter the email"],
            unique: true
        },
        password: {
            type: String,
            required: [true, "Please enter the password"]
        },
    },
)

const Auth = mongoose.model('Auth', authSchema);

module.exports = Auth;