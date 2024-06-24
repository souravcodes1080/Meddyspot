import express from "express"
import { addHospital } from '../controllers/hospital.controller.js';
const hospitalRouter = express.Router();

hospitalRouter.post("/add", addHospital)



export{ hospitalRouter}