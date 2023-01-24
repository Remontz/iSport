const mongoose = require('mongoose')
const DB = 'Events'

mongoose.connect(`mongodb://127.0.0.1/${DB}`)
    .then(() => console.log(`Success! Connected to DB: ${DB}`))
    .catch((err) => console.log(`Failure Connecting to DB: ${DB} Error: ${err}`))