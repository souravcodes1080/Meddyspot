import express from "express";
import upload from "../utils/multer.util.js";
import {
    addPharmacy,
    nearbyPharmacy,
    pharmacyById,
    searchPharmacy
} from "../controllers/pharmacy.controller.js";

const pharmacyRouter = express.Router();

pharmacyRouter.post("/add", upload.array('storePic', 20), addPharmacy);
pharmacyRouter.get("/getbyId/:id", pharmacyById);
pharmacyRouter.get("/search", searchPharmacy);
pharmacyRouter.get("/nearby", nearbyPharmacy);
export { pharmacyRouter };
