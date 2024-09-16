const express = require('express')
const { getCustomers, getCustomer, createCustomer, updateCustomer, deleteCustomer } = require('../controllers/customerController')
const route = express.Router();

route.get('/customers', getCustomers);
route.get('/customer/:id', getCustomer);
route.post('/customer/create', createCustomer);
route.put('/customer/:id', updateCustomer);
route.delete('/customer/:id', deleteCustomer);

module.exports = route

