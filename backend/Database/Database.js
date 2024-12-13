const mongoose=require('mongoose');

const dbConnect=async()=>{
    try
    {
       await mongoose.connect(process.env.Mongo_URI,{dbName:process.env.DatabaseName});
       console.log("Database connected!");
    }
    catch(err)
    {
        console.log("Error connecting Database!",err);
    }
}

module.exports=dbConnect;