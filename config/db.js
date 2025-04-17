const mongoose = require("mongoose");
const mongodb = async (req, res) =>{
    try {
      await mongoose.connect(process.env.MONGO_URL);
        console.log( `mongodb connected on host ${mongoose.connection.host}`.bgBlue);
    } catch (error) {
        console.log("error", error);  
    }
}
 
module.exports = mongodb; 
