const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv').config();
const colors = require('colors');

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).write(
    `<h1>Hello, world!</h1>`
  );
  res.end();
});

const booksRoute = require('./routes/books.route');

app.use('/api/v1/books', booksRoute);

mongoose.connect(process.env.DATABASE).then(() => {
  console.log('Successfully connected to the database'.blue.bold);
})


app.listen(PORT, () => {
  console.log('Server is running on port'.red.bold, PORT);
});