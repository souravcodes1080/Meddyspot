import express from "express";
import upload from "../utils/multer.util.js";
import {
    addDoctor
} from "../controllers/doctor.controller.js";

const doctorRouter = express.Router();

doctorRouter.post("/add", upload.single('profilePic'), addDoctor);
export { doctorRouter };
