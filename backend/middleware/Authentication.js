import jwt from "jsonwebtoken";

const Authentication = async (req, res, next) => {
  try {
      const token = req.cookies.token;
    
    if (!token) {
     return res.status(401).json({
        message: "User is not authenticated",
        status: false,
      });
    }
   
    const decode = await jwt.verify(token,process.env.SECRET_KEY);
    if(!decode){
         return res.status(401).json({
            message:"Invalid token",
            status: false,
        })
    }
    req.id=decode.userId;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default Authentication;