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

    //Password

    //Birth date


})