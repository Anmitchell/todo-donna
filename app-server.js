const express = require('express')
const app = express()
const path = require('path') // built in node.js module
const favicon = require('serve-favicon') // what is this?
const logger = require('morgan')

// middleware
app.use(express.json()) // parses req.body JSON data
// This middleware will run before the routes.
// Remember routes are ran at app.use('/api/todos')...
app.use( (req, res, next) => {
    res.locals.data = {}
    next()
})
app.use(logger('dev')) // why is dev here?
// ./public/favicon.ico .ico for multiple operating system
app.use(favicon(path.join(__dirname, 'public','img','spaceship.png')))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/todos', require('./routes/api/todos'))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = app