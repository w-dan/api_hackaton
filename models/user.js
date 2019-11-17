const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema({
  name: {type: String, required: [true, 'name required'],},
  surname: {type: String, required: [false],},
  email: {type: String, index:{unique: true,}, required: [true, 'email required'],},
  password: { type: String, required: [true, 'password required'],},
  phone: {type: String, minlength: 9, maxlength: 9, required: [false],},
  date: {type: { Date, default: Date.now() },},
})

UserSchema.pre('save') // mira lo que hace todo esto para usar bCrypt para encriptar la contraseña antes de guardar un usuario en bbddw

const User = mongoose.model('user', UserSchema)
module.exports = User