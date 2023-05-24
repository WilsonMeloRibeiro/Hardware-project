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
        }else{
            res.json("Email does not exist");
        }
    },
    async verifyUser(req, res){
        const {email, password} = req.body;
        const userVerified = await User.findOne({ where:{ email: email ,  password: password }})
        
        if (userVerified ) {
            res.json("User verified");
        }else{
            res.json("User not verified");
        }
    }
}