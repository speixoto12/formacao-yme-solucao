const controller = require('../controllers/todo');
const express = require('express');
const router = express.Router();


router.get('/', controller.getTodos);
router.post('/', controller.createTodo);
router.put('/:id', controller.updateTodo);
router.delete('/:id', controller.deleteTodo);

module.exports = router;