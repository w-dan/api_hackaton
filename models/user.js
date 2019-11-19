/* eslint-disable func-names */
/* eslint-disable consistent-return */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_WORK_FACTOR = 10;

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: [false],
  },
  surname: {
    type: String,
    required: [false],
  },
  mail: {
    type: String,
    index: {
      unique: true,
    },
    required: [true, 'mail required'],
  },
  password: {
    type: String,
    required: [true, 'password required'],
  },
  phone: {
    type: String,
    minlength: 9,
    maxlength: 9,
    required: [false], },

  date: { type: { Date, default: Date.now() }, },});


UserSchema.pre('save', function (next) {
  const user = this;

  if (!user.isModified('password')) { return next(); }

  bcrypt.genSalt(SALT_WORK_FACTOR, (error, salt) => {
    if (error) { return next(error); }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { return next(err); }

      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (candidateP, callback) {
  bcrypt.compare(candidateP, this.password, (err, isMatch) => {
    callback(err, isMatch);
  });
};

module.exports = mongoose.model('user', UserSchema);
