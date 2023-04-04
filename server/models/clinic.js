const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema(
  {
    first_name1: { type: String },
    last_name1: { type: String  },
    first_name2: { type: String },
    last_name2: { type: String },
    photo1: {type: String},
    photo2: {type: String},
    image1: {type :String},
    address: { type: String,},
    telephonnumber: { type: String},
    field: {type: String}
    // , required: [true, 'Telephon Number is Required!'] 
  },
  { timestamps: true },
);
const model = mongoose.model('clinic', clinicSchema);
module.exports = model;