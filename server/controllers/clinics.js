const Clinic = require('../models/clinic');

const createClinic = async (req, res) => {
  try {
    const newClinic = await Clinic.create(req.body);
    res.status(201).json(newClinic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllClinics = async (req, res) => {
  try {
    const clinics = await Clinic.find();
    res.json(clinics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getClinicById = async (req, res) => {
  try {
    const clinics = await Clinic.find({ _id: req.params.id });
    if (clinics.length === 0) {
      res.status(404).json({ message: 'clinic Not Found' });
    }
    res.json(clinics[0]);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateClinic = async (req, res) => {
  try {
    const updatedClinic = await Clinic.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    if (!updatedClinic) {
      res.status(404).json({ message: 'Clinic Not Found' });
    }
    res.json(updatedClinic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteClinic = async (req, res) => {
  try {
    const deletedClinic = await Clinic.findOneAndDelete({ _id: req.params.id });
    if (!deletedClinic) {
      res.status(404).json({ message: 'Clinic Not Found' });
    }
    res.json(deletedClinic);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createClinic,
  getAllClinics,
  getClinicById,
  updateClinic,
  deleteClinic,
};