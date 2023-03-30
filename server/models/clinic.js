const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema(
  {
    first_name1: { type: String, required: [true, 'First Name is Required!'] },
    last_name1: { type: String, required: [true, 'Last Name is Required!'] },
    first_name2: { type: String, required: [true, 'First Name is Required!'] },
    last_name2: { type: String, required: [true, 'Last Name is Required!'] },
    photo1: {type: String},
    photo2: {type: String},
    image1: {type :String},
    Address: { type: String, required: [true, 'Address is Required!'] },
    Telephonnumber: { type: Number, required: [true, 'Telephon Number is Required!'] },

  },
  { timestamps: true },
);
const model = mongoose.model('clinic', clinicSchema);
module.exports = model;