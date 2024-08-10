import express from 'express';
import {register,login,logout,updateProfile, getPhoto}from "../controllers/user-controller.js"
import Authentication from '../middleware/Authentication.js';
import formidable from "express-formidable"
const router=express.Router();

router.route("/register").post(formidable(),register);
router.route("/photo/:id").get(getPhoto);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(Authentication, updateProfile); //Authentication middleware is used for checking that user is valid or not for accessing this route

export default router;