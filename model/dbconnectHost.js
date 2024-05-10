const mongoose = require('mongoose');

const mainConnect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_ATLAS_URL);
        console.log("Connected to MongoDb Server");
    }
    catch(err){
        console.log(err.message);
    }
}

module.exports = { mainConnect }