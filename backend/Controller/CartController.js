const cartModel=require('../Model/CartModel.js');
const notesModel=require('../Model/NotesModel.js')
const cartFeature=async (req,res)=>{
  const cart=req.body;
  res.send("cart");
}

const reminder=async (req,res)=>{
  const {bookName,genre,author,purchased,date,id}=req.body;
 
  if(!bookName || !genre || !author || !purchased)
    return res.status(400).json({"message":"field can't be empty!"});
  
  const note=new notesModel({'bookname':bookName,'genre':genre,'author':author,'purchased':purchased,
    date:date,id:id
  });
  
  await note.save();

  return res.status(201).json({"message":"notes has been saved"});
}

const fetchReminder=async (req,res)=>{
  const {id}=req.body;
 
  if(!id)
    return res.status(400).json({"message":"id can't be empty!"});
  
  const note=await notesModel.find({id:id});

  console.log(note,id)
  if(!note && note.length<1)
    return res.status(400).json({"message":"notes not found"});

  return res.status(200).json({"message":"notes found",data:note});
}

const deleteNote=async (req,res)=>{
  const {id}=req.body;
 
  console.log("id",id);
  if(!id)
    return res.status(400).json({"message":"id can't be empty!"});
  
  const note=await notesModel.find({id:id});

  if(!note && note.length<1)
    return res.status(400).json({"message":"notes not found"});

  await notesModel.deleteOne({_id:id})
  return res.status(200).json({"message":"notes delete"});
}

module.exports={reminder,cartFeature,fetchReminder,deleteNote};