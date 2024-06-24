import express from "express";
import upload from "../utils/multer.util.js";
import {
  addHospital,
  getAllHospital,
  hospitalById,
  nearbyHospitals,
  searchHospitals,
  updateHospital,
} from "../controllers/hospital.controller.js";

const hospitalRouter = express.Router();

hospitalRouter.get("/", getAllHospital);
hospitalRouter.post("/add", upload.array("image", 20), addHospital);
hospitalRouter.get("/getbyId/:id", hospitalById);
hospitalRouter.get("/search", searchHospitals);
hospitalRouter.get("/nearby", nearbyHospitals);
hospitalRouter.post("/update/:id", updateHospital);

export { hospitalRouter };
