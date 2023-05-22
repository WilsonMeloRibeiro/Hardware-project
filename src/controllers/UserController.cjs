const User = require('../models/User.cjs');
const Op = require('sequelize');

module.exports = {
    async store(req, res) {
        const {name, email, password} = req.body;

        const user = await User.create({name, email, password});
        
        return res.json(user);
    },
    async verifyEmail(req, res){

        const { email } = req.body;
        const emailExists = await User.findOne({ where: { email: email } });
        
        if (emailExists ) {
            res.json("Email already registered");
        }
    },
    async verifyPassword(req, res){
        const {email, password} = req.body;
        const passwordVerified = await User.findOne({ where:{ email: email ,  password: password }})
        
        if (passwordVerified ) {
            res.json("Password is verified");
        }else{
            res.json("Passowrd is not verified");
        }
    }
}