const sendToken = async(user, statusCode, res,message) => {
    const token = await user.getJWTToken();
    res.status(statusCode).json({
      success: true,
      user,
      message,
      token: token
    });
  };
  
export default sendToken;
  