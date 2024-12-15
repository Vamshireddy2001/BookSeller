const jwt=require('jsonwebtoken');
const verify=(req,res,next)=>{
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: "Token not provided or invalid format" });
    }

    const token = authHeader.split(' ')[1];
  if(!token)
     res.status(401).json({"message":"token not found"})
  const decoded=jwt.verify(token,"123456");

  if(!decoded)
  {
    res.status(401).json({"message":"token not verified found"})
  }
  req.user=decoded;
  next();
}

module.exports=verify;