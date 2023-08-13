const User = require('../models/userModel');
// ! Still need to create this
const secret = process.env.SECRET_KEY;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    registerUser: async (req, res) => {
        try{
            // * Check if the email that was entered in the reg form is already in the DB
            const potentialUser = await User.findOne({email:req.body.email})
            if(potentialUser){
                res.status(400).json({message: 'That email already exists please login'})
            }else{
                // * create user
                const newUser = await User.create(req.body);

                // * Generating a usertoken and storing the id and email of the newly created user
                const userToken = jwt.sign({_id: newUser._id, email:newUser.email}, secret, {expiresIn:'2h'})
                console.log(userToken);
                // * Sending user data back to the client
                res.status(201).cookie('userToken', userToken, {httpOnly:true, maxAge:2 * 60 * 60 * 1000}).json(newUser);
            }
        }
        catch(err){
            res.status(400).json({ error: err })
        }
    },
