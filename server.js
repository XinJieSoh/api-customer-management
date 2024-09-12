const express = require('express');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config(); // to read the .env file
const port = process.env.PORT_NUMBER;

app.use(express.json());

mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=> {
        console.log('Connected to MongoDB!')
        app.listen(port, () => {
            console.log(`Listening on port ${port}`)
        });
    })
    .catch((error) => {
        console.log(error)
    })
