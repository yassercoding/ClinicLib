const mongoose = require('mongoose');


const doctorSchema = new mongoose.Schema(
  {
    name: { type: String },
    specialty:{type: String},
    clinicId:{type:mongoose.Types.ObjectId,ref:'clinic'},
    telNumber: { type: String},
    description: {type: String},
    image: {type: String}
  },
  { timestamps: true },
);
const model = mongoose.model('doctor', doctorSchema);
module.exports = model;
