const mongoose=require('mongoose');
const schema=mongoose.Schema({
    id:{
        type:mongoose.Schema.ObjectId,
        required:true,
    },
    bookname:{
        type:String,
        required:true,
    },   
    genre:{
        type:String,
        required:true,
    },   
    author:{
        type:String,
        required:true,
    },
    purchased:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now()
    },

});

const notesModel=mongoose.model("NotesModel",schema);

module.exports=notesModel;