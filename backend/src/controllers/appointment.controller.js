import {Appointment} from "../models/appointment.model.js";

import { sendAppointmentConfirmation } from "../utils/nodemailer.util.js"; 
import cron from "node-cron";
const bookAppointment = async (req, res) => {
  try {
    const {
      user,
      hospital,
      doctor,
      appointmentDate,
      appointmentTime,
      userContact,
    } = req.body;

    const newAppointment = new Appointment({
      user,
      hospital,
      doctor,
      appointmentDate,
      appointmentTime,
      userContact,
    });

    await newAppointment.save();
    await sendAppointmentConfirmation(userContact.email, userContact.name, hospital,doctor, appointmentDate, appointmentTime)
    return res.json({
      success: true,
      message: "Appointment booked successfully.",
      appointment: newAppointment,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Error while booking appointment.",
    });
  }
};


const updateAppointmentStatus = async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;
  
      // Validate status
      if (!status) {
        return res.status(400).json({ success: false, message: 'Status is required.' });
      }
  
      // Find the appointment by ID and update its status
      const appointment = await Appointment.findByIdAndUpdate(id, { status }, { new: true });
  
      if (!appointment) {
        return res.status(404).json({ success: false, message: 'Appointment not found.' });
      }
  
      return res.json({ success: true, message: 'Appointment status updated successfully.', appointment });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ success: false, message: 'Error updating appointment status.' });
    }
  };

 

export { bookAppointment, updateAppointmentStatus };
