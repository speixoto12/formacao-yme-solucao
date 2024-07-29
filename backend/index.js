// Load environment variables
require('dotenv').config()

// Importing express module and creating an express app
const express = require('express')
const app = express()

// Port
const port = process.env.PORT || 3002 // Port can be changed in .env file

// Routes for the app
const todoRoutes = require('./routes/todo'); // Importing todo routes

// Middlewares
app.use(express.json()) // For parsing application/json

// Routes
app.use('/api/todos', todoRoutes); // All routes starting with /api/todos will be handled by todoRoutes

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})