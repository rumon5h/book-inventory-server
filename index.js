const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();





app.get('/', (req, res) => {
    res.send('Hello from express')
});

app.listen(port, () => {
    console.log("Listening from port", port);
})