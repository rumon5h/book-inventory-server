const express = require('express');
const dotenv = require('dotenv').config();
const app = require('./index');
const PORT = process.env.PORT || 5000;
const colors = require('colors');
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE).then(() => {
    console.log('Successfully connected to the database'.blue.bold);
})


app.listen(PORT, () => {
    console.log('Server is running on port'.red.bold, PORT);
});
