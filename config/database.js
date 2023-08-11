const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI)

const db = mongoose.connection // establish connection with database

// Display message when connection is established with database
db.on('connected', () => {
    console.log(`Connnected to ${db.name} at ${db.host}`)
})

// This is called an effect?
// this file in multiple places without having to re-write it 