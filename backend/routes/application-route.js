import express from 'express';
import Authentication from '../middleware/Authentication.js';
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from '../controllers/application-controller.js';
const router=express.Router();
 
router.route("/apply/:id").get(Authentication,applyJob);
router.route("/get").get(Authentication,getAppliedJobs);
router.route("/:id/applicants").get(Authentication,getApplicants);
router.route("/status/:id/update").post(Authentication, updateStatus); 

//Authentication middleware is used for checking that user is valid or not for accessing this route

export default router;