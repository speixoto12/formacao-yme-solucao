// Load environment variables
require('dotenv').config()

const express = require('express')
const app = express()

const port = process.env.PORT || 3002

const cors = require("cors");
const corsOptions = require("./config/corsOptions");

app.use(function (req, res, next) {
  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, Content-Type, Authorization"
  );

  // Pass to next layer of middleware
  next();
});

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})