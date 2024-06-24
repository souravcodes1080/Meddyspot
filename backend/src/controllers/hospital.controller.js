import { Hospital } from "../models/hospital.model.js";

const getAllHospital = async (req, res) => {
  try {
    const hospitals = await Hospital.find();
    return res.json({
      success: true,
      message: "All Hospitals fetched successfully.",
      hospitals,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      success: false,
      message: "Error while fetching hospitals.",
    });
  }
};

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
      city,
      state,
      pincode,
      gmapLink,
      website,
      review,
      rating,
    } = req.body;

    const image = req.files ? req.files.map((file) => file.path) : [];
    const location = {
        type: 'Point',
        coordinates: [parseFloat(long), parseFloat(lat)], // Ensure coordinates are parsed as floats
      };
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
      city,
      state,
      pincode,
      gmapLink,
      website,
      review,
      rating,
      location
    });

    // Save the hospital to the database
    await newHospital.save();

    // Respond with success
    return res.json({
      success: true,
      message: "Hospital registered successfully.",
      hospital: newHospital,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      success: false,
      message: "Error while registering hospital.",
    });
  }
};

const hospitalById = async (req, res) => {
  try {
    const { id } = req.params;

    const hospital = await Hospital.findById(id);

    if (!hospital) {
      return res.json({
        success: false,
        message: "Hospital not found.",
      });
    }
    return res.json({
      success: true,
      message: "Hospital details found successfully.",
      hospital,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      success: false,
      message: "Error while finding hospital.",
    });
  }
};

const searchHospitals = async (req, res) => {
  try {
    const { query } = req.query;
    const hospitals = await Hospital.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { city: { $regex: query, $options: "i" } },
        { state: { $regex: query, $options: "i" } },
      ],
    });

    return res.json({
      success: true,
      message: "Hospitals fetched successfully.",
      hospitals,
    });
  } catch (err) {
    console.error(err);
    return res.json({
      success: false,
      message: "Error while searching hospitals.",
    });
  }
};
const nearbyHospitals = async (req, res) => {
  try {
    const { lat, long } = req.query;
    const parsedLat = parseFloat(lat);
    const parsedLong = parseFloat(long);
    const hospitals = await Hospital.find({
        location: {
          $near: {
            $geometry: {
              type: 'Point',
              coordinates: [parsedLong, parsedLat],
            },
            $maxDistance: 100000,
          },
        },
      });

    return res.json({
      success: true,
      message: "Nearby hospitals fetched successfully.",
      hospitals,
    });
  } catch (err) {
    console.error(err);
    return res.json({
      success: false,
      message: "Error while searching hospitals.",
    });
  }
};

export { getAllHospital, addHospital, hospitalById, searchHospitals, nearbyHospitals };
