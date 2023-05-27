const User = require('../models/User.cjs');
const Op = require('sequelize');
const bcrypt = require('bcrypt');
const saltRounds = 10;
module.exports = {
    async store(req, res) {
        const {name, email, plainPassword} = req.body;

        bcrypt.hash(plainPassword, saltRounds, async function(err, hash) {
            const password = hash;
    
            const user = await User.create({name, email, password});
            
            return res.json(user);
        });
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
        const userVerified = await User.findOne({ where:{ email: email}})
        if(userVerified){
            bcrypt.compare(password, userVerified.password, function(err, result) {
                if (result ) {
                    req.session.user = userVerified;
                    res.json("User verified");
                }else{
                    res.json("User not verified");
                }
            });
        }else{
            res.json("User not verified");
        }
    },

    verifySession(req, res){
        if(req.session.user){
            res.send({loggedIn: true, user:req.session.user})
        }else{
            res.send({loggedIn: false})
        } 
        
    }
}