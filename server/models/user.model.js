const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    //UserName
    userName: {
        firstName: {
            type: String,
            required: [true, 'User First Name is required'],
            minLength: [3, 'First Name must be at least 3 characters']
        },
        lastName: {
            type: String,
            required: [true, 'Last Name is required.'],
            minLength: [3, 'Last name must have at least 3 characters']
        }
    },
    //Email
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    //Password
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password must be 8 characters or longer"]
    }
    //Birth date


}, { timestamps: true })

const User = mongoose.model('User', UserSchema)
module.exports = User