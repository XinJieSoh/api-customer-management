const Customer = require('../models/customerModel');

exports.getCustomers = async(req, res) => {
    try {
        const customers = await Customer.find({})
        res.status(200).json({customers: customers})
    } catch(error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

exports.getCustomer = async(req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findById(id)
        res.status(200).json(customer)
    } catch(error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

exports.createCustomer = async(req, res) => {
    try {
        const customer = await Customer.create(req.body)
        res.status(200).json(customer)
    } catch(error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

exports.updateCustomer = async(req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findByIdAndUpdate(id, req.body)
        if(!customer) {
            return res.status(404).json({message: `cannot find any customer with id: ${id}`})
        }
        const updatedCustomer = await Customer.findById(id)
        res.status(200).json(updatedCustomer)
    } catch(error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}

exports.deleteCustomer = async(req, res) => {
    try {
        const { id } = req.params;
        const customer = await Customer.findByIdAndDelete(id)
        if(!customer) {
            return res.status(404).json({message: `cannot find any customer with id: ${id}`})
        }
        res.status(200).json(customer)
    } catch(error) {
        console.log(error.message)
        res.status(500).json({message: error.message})
    }
}
