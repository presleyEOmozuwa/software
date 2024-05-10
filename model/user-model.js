const mongoose = require('mongoose'); 
const { Schema, model } = mongoose;

// Declare the Schema of the Mongo model
const userSchema = new Schema({ 
    firstname:{
        type: String,
        default: "firstname"
    },
    
    lastname:{
        type: String,
        default: "lastnme"
    },
    
    gender:{
        type: String,
        default: "gender"
    }
    
}, { timestamps: true});

const User = model("User", userSchema);

module.exports = User;