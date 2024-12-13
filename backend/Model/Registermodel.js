const mongoose=require('mongoose');
const schema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },   
    email:{
        type:String,
        required:true,
        unique:true
    },   
    password:{
        type:String,
        required:true,
    },
    cart: [{
        itemName: {
            type: String,
        },
        itemId: {
            type: Number
        },
        quantity: {
            type: Number,
             },
    }]
});

const registerModel=mongoose.model("RegisterModel",schema);

module.exports=registerModel;