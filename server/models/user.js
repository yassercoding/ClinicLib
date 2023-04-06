const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minLength: [8, 'Password Must be at least 8 characters'],
    },
  },
  { timestamps: true },
);

//Virtual field
// NOT SAVED IN THE DB

UserSchema.virtual('confirmPassword')
  .get(() => this._confirmPassword)
  .set(value => (this._confirmPassword = value));

// MAKE SURE TO USE function not ()=> with mongoose middleware
UserSchema.pre('validate', function (next) {
  if (this.password !== this.confirmPassword) {
    this.invalidate('confirmPassword', 'Passwords must match!');
  }
  next();
});

UserSchema.pre('save', async function (next) {
  try {
    const hashedPassword = await bcrypt.hash(this.password, 8);
    console.log('HASHED PASSWORD', hashedPassword);
    this.password = hashedPassword;
    next();
  } catch (error) {
    console.log('ERROR', 'hashing error');
    next(error);
  }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;