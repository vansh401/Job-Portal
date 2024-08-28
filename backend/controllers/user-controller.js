import { User } from "../models/user-model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import sendToken from "../jwtToken/jwtToken.js";
import fs from "fs"

export const register = async (req, res) => {
  try {
    const {photo}=req.files;
    if(photo && photo.size > 1000000){
      return res.status(400).send({
        message:"Photo is required and should be less than 1 mb",
        success: false,
      })
    }
    
    
    const { fullname, email, phoneNumber, password, role} = req.fields;
    
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "All Credentials required",
        success: false,
      });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already registered with this email",
        success: false,
      });
    }

   const newuser = await User({
      fullname,
      email,
      phoneNumber,
      password,
      role,
    });
    if(photo){
      
      newuser.photo.data=fs.readFileSync(photo.path);
      newuser.photo.contentType=photo.type;
    }
    await newuser.save();
    
    sendToken(newuser,200,res,"Account Created Successfully"); 
    
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "All Credentials required",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const isPasswordMatch = await user.comparePassword(password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
        success: false,
      });
    }    

    sendToken(user,200,res,"Login Successfully"); 

  } catch (error) {
    console.log(error);
  }
};

export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "logout successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;

    const file = req.file;

    // if (!fullname || !email || !phoneNumber || !bio || !skills) {
    //   return res.status(400).json({
    //     messgae: "All Credentials required",
    //     success: false,
    //   });
    // }
    // cloudinary aaega yaha!!
    let skillsArray;
    if(skills){
      skillsArray = skills.split(",");
    }
    const userId = req.id; // middleware authentication
    let user = await User.findById(userId);

    if (!user) {
      res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    // updating the data of user
    
    if(fullname)user.fullname = fullname;
    if(email)user.email = email;
    if(phoneNumber)user.phoneNumber = phoneNumber;
    if(bio)user.profile.bio = bio;
    if(skills)user.profile.skills = skillsArray;

    // resume will come here

    await user.save();

    user={
        _id:user._id,
        fullname:user.fullname,
        email:user.email,
        phoneNumber:user.phoneNumber,
        role:user.role,
        profile:user.profile
    }
    return res.status(200).json({
        message:"Profile updated successfully",
        user,
        success:true
    })
  } catch (error) {
    console.log(error);
  }
};

export const getPhoto = async (req, res) => {

  try {
    const {id}=req.params;
    
  const users = await User.findById({_id:id}).select("photo");
  
    if (users.photo.data) {
      res.set("Content-type", users.photo.contentType);
      return res.status(200).send(users.photo.data);
    }
  } catch (error) {
    console.log(error)
  }
  
  
}

export const profile= async(req,res)=>{

  try {
     return res.status(200).send({
      user : req.user
     });
  } catch (error) {
    console.log(error);
  }
}
