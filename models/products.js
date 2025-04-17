const mongoose = require("mongoose");
const productsSchema = mongoose.Schema({
    product:{
        type:String,
        required:[true, 'product name is required']
    }, 
    quantity:{
        type:Number,
        required: [true, "quantity is required"]
    },
    price:{
        type:Number,
        required:[ true, "Price is required"]
    }
   
},
{timestamps: true}
);

module.exports = mongoose.model("products", productsSchema)