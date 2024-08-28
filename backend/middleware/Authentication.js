import jwt from "jsonwebtoken";
import {User} from "../models/user-model.js";

const Authentication = async (req, res, next) => {
  try {
    const token = req.headers.authorization;   
    if (!token) {
     return res.status(401).json({
        message: "User is not authenticated",
        status: false,
      });
    }
    const decode = await jwt.verify(token,process.env.JWT_SECRET);
    if(!decode){
         return res.status(401).json({
            message:"Invalid token",
            status: false,
        })
    }
    req.user = await User.findById(decode.id);;
    next();
  } catch (error) {
    console.log(error);
  }
};

export default Authentication;