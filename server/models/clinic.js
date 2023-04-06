const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema(
  {
    name: { type: String },
    specialty:{type: String},
    address: { type: String},
    telNumber: { type: String},
    description: {type: String},
    image: {type: String},
    url: {type: String}
  },
  { timestamps: true },
);
const model = mongoose.model('clinic', clinicSchema);
module.exports = model;
