const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000
const cookieParser = require('cookie-parser')

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(
    {
        credentials: true,
        origin: 'http://localhost:3000'
    }
))

require('dotenv').config()
const myFirstSecret = process.env.FIRST_SECRET_KEY
const jwt = require('jsonwebtoken')

require('./config/mongoose.config')

require('./config/mongoose.config')
require('./routes/event.routes')(app)
require('./routes/user.routes')(app)
const payload = {
    id: user._id
}
const userToken = jwt.sign(payload, process.env.SECRET_KEY)

app.listen(port, () => console.log(`Listening on port: ${port}`))