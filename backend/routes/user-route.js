import express from 'express';
import {register,login,logout,updateProfile}from "../controllers/user-controller.js"
import Authentication from '../middleware/Authentication.js';
const router=express.Router();
 
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(Authentication, updateProfile); //Authentication middleware is used for checking that user is valid or not for accessing this route

export default router;