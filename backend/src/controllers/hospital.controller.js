import { Hospital } from "../models/hospital.model.js";

const addHospital = async (req, res) => {
    try {
      const {
        name,
        email,
        phoneNumber,
        type,
        specialized,
        facilities,
        doctor,
        lat,
        long,
        address,
        state,
        pincode,
        gmapLink,
        website,
        review,
        rating,
      } = req.body;

      const image = req.files ? req.files.map(file => file.path) : [];
      
      const newHospital = new Hospital({
        name,
        email,
        phoneNumber,
        image,
        type,
        specialized,
        facilities,
        doctor,
        lat,
        long,
        address,
        state,
        pincode,
        gmapLink,
        website,
        review,
        rating,
      });
  
      // Save the hospital to the database
      await newHospital.save();
  
      // Respond with success
      return res.json({
        success: true,
        message: 'Hospital registered successfully.',
        hospital: newHospital,
      });
    } catch (err) {
      console.log(err);
      return res.json({
        success: false,
        message: 'Error while registering hospital.',
      });
    }
  };



export {addHospital}