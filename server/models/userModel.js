const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { isEmail } = require('validator');

const UserSchema = new mongoose.Schema({
    firstName: {
        type:String,
        required:[true, 'First name is required'],
        minLength:[2, 'First Name must be at least 2 characters'],
        maxLength:[50, 'First Name is too long']
    },
    lastName: {
        type:String,
        required:[true, 'Last name is required'],
        minLength:[2, 'Last Name must be at least 2 characters'],
        maxLength:[50, 'Last Name is too long']
    },
    email: {
        type:String,
        required:[true, 'Email is required'],
        minLength:[2, 'Email must be at least 2 characters'],
        validate:[isEmail, 'Invalid Email']
    },
    password:{
        type:String,
        required:[true, 'Password is required'],
        minLength:[8, 'Password must be 8 characters']
    }
}, {timestamps:true})