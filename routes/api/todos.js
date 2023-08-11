const express = require('express')
const router = express.Router()
const todoCtrl = require('../../controllers/api/todos')

// Index Incomplete /api/todos             // next function 
router.get('/', todoCtrl.indexNotComplete, todoCtrl.jsonTodos)
// Index complete /api/todos/completed
router.get('/completed', todoCtrl.indexComplete, todoCtrl.jsonTodos)
// Delete
router.delete('/:id', todoCtrl.destroy, todoCtrl.jsonTodo)
// Update
router.put('/:id', todoCtrl.update, todoCtrl.jsonTodo)
// Create
router.post('/', todoCtrl.create, todoCtrl.jsonTodo)
// Show
router.get('/:id', todoCtrl.show, todoCtrl.jsonTodo)

module.exports = router