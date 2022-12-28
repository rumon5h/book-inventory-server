const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).write(
    `<h1>Hello, world!</h1>`
  )
})


module.exports = app;