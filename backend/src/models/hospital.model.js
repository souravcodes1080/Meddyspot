import mongoose, { Schema } from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    image: {
      type: [String],
    },
    type: {
      type: [String],
      required: true,
    },
    specialized:{
        type: [String],
    },
    facilities: {
      type: [String],
      required: true,
    },
    doctor: [
      {
        type: Schema.Types.ObjectId,
        ref: "Doctor",
      },
    ],
    location: {
      lat: {
        type: Number,
        required: true,
      },
      long: {
        type: Number,
        required: true,
      },
    },
    address: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
    gmapLink: {
      type: String,
      required: true,
    },
    website: {
      type: String,
    },
    // review: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: Review,
    //   },
    // ],
    rating: {
      type: Number,
      default: 0.0,
    },
  },
  { timestamps: true }
);

const Hospital = new mongoose.model("Hospital", hospitalSchema);

export { Hospital };
