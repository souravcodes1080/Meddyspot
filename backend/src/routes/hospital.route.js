import express from "express"
import upload from "../utils/multer.util.js";
import { addHospital } from '../controllers/hospital.controller.js';

const hospitalRouter = express.Router();

hospitalRouter.post("/add", upload.array('image',20), addHospital)



export{ hospitalRouter}