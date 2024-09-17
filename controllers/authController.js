const Auth = require('../models/authModel')

exports.register = async (req, res) => {
    try {
        const { email } = req.body;
        const existingAcc = await Auth.findOne({ email })
        if (existingAcc) {
            return res.status(400).json({ message: 'Email has been registered as other account.' });
        }
        const auth = await Auth.create(req.body)
        res.status(200).json(auth)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const auth = await Auth.findOne({ email });
        if (!auth || (auth.password !== password)) {
            return res.status(400).json({ message: 'Invalid credentials.' });
        }
        res.status(200).json({ message: 'Login successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.logout = async (req, res) => {
    res.status(200).json({ message: 'Logout successfully.' });
}