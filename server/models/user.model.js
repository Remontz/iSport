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
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
        }
    },
    //Password
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Password must be 8 characters or longer"]
    },
    //Birth date
    birthDate: {
        type: Date,
        required: [true, 'Birthdate is required']
    }


}, { timestamps: true })

UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value)
UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password')
    }
    next()
})
UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash
            next()
        })
})

const User = mongoose.model('User', UserSchema)
module.exports = User