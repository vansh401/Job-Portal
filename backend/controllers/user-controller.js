import { User } from "../models/user-model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const register = async(req,res)=>{
    try {
        const {fullname,email,phoneNumber,password,role} = req.body;
        if(!fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                message:"All Credentials required",
                success:false
            });
        };

        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:"User already registered with this email",
                success:false
            })
        }

        const hashedPassword= await bcrypt.hash(password,10); 

        await User.create({
            fullname,
            email,
            phoneNumber,
            password:hashedPassword,
            role
        });
        return res.status(201).json({
            message:"Account created successfully",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}

export const login = async (req,res) => {
    try {
        const {email,password,role} = req.body;
        if(!email || !password || !role){
            return res.status(400).json({
                message:"All Credentials required",
                success:false
            })
        }  
        let user= await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message:"Incorrect email or password",
                success:false
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message:"Invalid email or password",
                success:false
            });
        }
        // check role is correct or not
        if(role!=user.role){
            return res.status(400).json({
                message:"Account does not exists with this role",
                success:false
            })
        }

        const tokenData={
            userId:user._id
        }
        const token=await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});

        user={
            _id:user._id,
            fullname:user.fullname,
            email:user.email,
            phoneNumber:user.phoneNumber,
            role:user.role,
            profile:user.profile
        }
        
        return res.status(200).cookie("Token",token,{maxAge:1*24*60*60*1000, httpsOnly:true,sameSite:'strict'}).json({
            message:`Welcome Back ${user.fullname}`,
            user,
            success:true    
        })

    } catch (error) {
        console.log(error);
    }
}


export const logout= async (req, res) => {
    try {
        return res.status(200).cookie("Token","",{maxAge:0}).json({
            message:"logout successfully",
            success:true
        })
    } catch (error) {
        console.log(error);
    }
}

export const updateProfile= async (req, res) => {
    try {
        const {fullname, email, phoneNumber,bio,skills}=req.body;
        if(!fullname || !email || !phoneNumber || !bio || !skills){
            return res.status(400).json({
                messgae:"All Credentials required",
                success:false
            });
        }
        const skillsArray=skills.split(",");
        const userId=req.id;  // middleware authentication 

    } catch (error) {
        console.log(error);
    }
}