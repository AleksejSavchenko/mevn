import mongoose from 'mongoose'
import Bcrypt from 'bcryptjs'
import randomstring from 'randomstring'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  password: String,
  emailConfirmedAt: Date,
  emailConfirmedCode: String
})

UserSchema.pre('save', function() {
  this.password = Bcrypt.hashSync(this.password)
  this.emailConfirmedCode = randomstring.generate(72)

  this.createdAt = new Date()
})

export default mongoose.model('User', UserSchema)
