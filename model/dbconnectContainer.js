const mongoose = require('mongoose');

const dbconnect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_POD_URL);
        console.log("Connected to MongoDb Server");
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports = { dbconnect }