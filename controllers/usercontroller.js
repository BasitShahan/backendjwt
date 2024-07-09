const bcrypt = require('bcrypt');
const TableData = require('../models/data');

const register = async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required" });
        }

        const existingUser = await TableData.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "Username already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new TableData({ username, password: hashedPassword });
        
        await user.save();

        const token =  user.generateAuthToken();
        return res.status(200).json({ message: "User registered successfully", token });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

const login = (req, res) => {
    res.send("I am login");
    console.log("I am login");
};

const middleware = (req, res, next) => {
    console.log("I am middleware");
    next();
};

module.exports = { register, login, middleware };
