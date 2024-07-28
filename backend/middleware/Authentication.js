import jwt from "jsonwebtoken";

const Authentication = async (req, res, next) => {
  try {
      const token = req.cookies.Token;
    //   console.log(req.cookies.Token);
    if (!token) {
      res.status(401).json({
        message: "User is not authorized to access",
        status: false,
      });
    }
    const decode = await jwt.verify(token,process.env.SECRET_KEY);
    if(!decode){
        res.status(401).json({
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