import express from 'express';
import Authentication from '../middleware/Authentication.js';
import { getAdminJobs, getAllJobs, getJobById, postJob } from '../controllers/job-controller.js';

const router=express.Router();
 
router.route("/post").post(Authentication,postJob);
router.route("/get").get(Authentication,getAllJobs);
router.route("/getadminjobs").get(Authentication,getAdminJobs);
router.route("/get/:id").get(Authentication,getJobById);

export default router;