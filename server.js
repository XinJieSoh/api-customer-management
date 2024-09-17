const express = require('express');
// not recommend for production
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
require('dotenv').config(); // to read the .env file
const port = process.env.PORT_NUMBER;
const connectionString  = process.env.CONNECTION_STRING;

const customerRoute = require('./routes/customerRoute');
const authRoute = require('./routes/authRoute')

app.use(cors());
app.use(express.json());

mongoose.connect(connectionString)
    .then(() => {
        console.log('Connected to MongoDB!')
        app.listen(port, () => {
            console.log(`Listening on port ${port}`)
        });
    })
    .catch((error) => {
        console.log(error)
    })

app.use(customerRoute);
app.use(authRoute);