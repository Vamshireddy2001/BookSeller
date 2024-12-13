const cartModel=require('../Model/CartModel.js');
const notesModel=require('../Model/NotesModel.js')
const cartFeature=async (req,res)=>{
  const cart=req.body;
  res.send("cart");
}

const reminder=async (req,res)=>{
  const notes=req.body;
 
  if(!notes)
    return res.status(400).json({"message":"notes can't be empty!"});
  
  const note=new notesModel({'bookname':notes.bookName,'genre':notes.genre,'author':notes.author,'purchased':notes.purchased,
    date:notes.date,id:notes.id
  });
  
  await note.save();

  return res.status(400).json({"message":"notes has been saved"});
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


module.exports={reminder,cartFeature,fetchReminder};