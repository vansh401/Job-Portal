import express from 'express';
import Authentication from '../middleware/Authentication.js';
import { getCompany, getCompanyById, registerCompany, updateCompany } from '../controllers/company-controller.js';
const router=express.Router();
 
router.route("/register").post(Authentication,registerCompany);
router.route("/get").get(Authentication,getCompany);
router.route("/get/:id").get(Authentication,getCompanyById);
router.route("/update/:id").put(Authentication, updateCompany); 

//Authentication middleware is used for checking that user is valid or not for accessing this route

export default router;