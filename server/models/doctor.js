const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
  {
    first_name1: { type: String },
    last_name1: { type: String  },
    photo1: {type: String},
    address: { type: String,},
    telephonnumber: { type: String},
    field: {type: String}
    // , required: [true, 'Telephon Number is Required!'] 
  },
  { timestamps: true },
);
const model = mongoose.model('doctor', doctorSchema);
module.exports = model;