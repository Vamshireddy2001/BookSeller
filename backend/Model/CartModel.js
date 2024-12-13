const mongoose=require('mongoose');

const schema=mongoose.Schema({
    userId:{
        type:String,
        unique:true,
        required:true
    },
    cart:[]
});

const cartModel=mongoose.model("CartModel",schema);
module.exports=cartModel;