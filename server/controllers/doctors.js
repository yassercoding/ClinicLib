const Doctor = require('../models/doctor');

const createDoctor = async (req, res) => {
  try {
    const newDoctor = await Doctor.create(req.body);
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getDoctorById = async (req, res) => {
  try {
    const doctors = await Doctor.find({ _id: req.params.id });
    if (doctors.length === 0) {
      res.status(404).json({ message: 'Doctor Not Found' });
    }
    res.json(doctors[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateDoctor = async (req, res) => {
  try {
    const updatedDoctor = await Doctor.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    if (!updatedDoctor) {
      res.status(404).json({ message: 'Doctor Not Found' });
    }
    res.json(updatedDoctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteDoctor = async (req, res) => {
  try {
    const deletedDoctor = await Doctor.findOneAndDelete({ _id: req.params.id });
    if (!deletedDoctor) {
      res.status(404).json({ message: 'Doctor Not Found' });
    }
    res.json(deletedDoctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};
