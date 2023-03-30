const express = require('express');
const router = express.Router();
const {
  getAllClinics,
  getClinicById,
  createClinic,
  updateClinic,
  deleteClinic,
} = require('../controllers/clinics');

router.get('/', getAllClinics);
router.get('/:id', getClinicById);
router.post('/', createClinic);
router.put('/:id', updateClinic);
router.delete('/:id', deleteClinic);

module.exports = router;
