const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000
require('dotenv').config()
const myFirstSecret = process.env.FIRST_SECRET_KEY
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

require('./config/mongoose.config')
app.use(cors(
    {
        credentials: true,
        origin: 'http://localhost:3000'
    }
))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

require('./config/mongoose.config')
require('./routes/event.routes')(app)

const payload = {
    id: user._id
}
const userToken = jwt.sign(payload, process.env.SECRET_KEY)

app.listen(port, () => console.log(`Listening on port: ${port}`))