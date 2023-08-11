// server.js
require('dotenv').config()

// connection is made in database file
require('./config/database')

// running this will connect our database to our mern app
const app = require('./app-server')

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
	console.log(`I am listening on ${PORT}. We In The Building`)
})

// here is a change
