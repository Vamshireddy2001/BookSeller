const express=require("express");
const cors=require("cors");
const dotenv=require('dotenv').config({path:"./config.env"});
const dbConnect=require('./Database/Database.js');
const authRouter=require('./Routes/AuthRoute.js');
const cartRoute=require('./Routes/CartRoute.js');
const cookieParser=require('cookie-parser');
//Setup app
const app=express();

app.use(cors({
credentials:true,
 origin:'https://frontend-zwrc.onrender.com'
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/",authRouter);

app.use("/cart",cartRoute);


dbConnect();

app.listen(process.env.PORT || 2500,process.env.host,()=>{console.log(`Server running on port: ${process.env.PORT}`)});