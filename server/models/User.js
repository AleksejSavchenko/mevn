import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import config from '@config'
import Bcrypt from 'bcryptjs'
import randomstring from 'randomstring'
import Mail from '@fullstackjs/mail'

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  createdAt: Date,
  updatedAt: Date,
  password: String,
  emailConfirmedAt: Date,
  emailConfirmCode: String
})

UserSchema.pre('save', function() {
  this.password = Bcrypt.hashSync(this.password)
  this.emailConfirmCode = randomstring.generate(72)
  this.createdAt = new Date()
})

UserSchema.post('save', async function() {
  await new Mail('confirm-account')
    .to(this.email, this.name)
    .subject('Please confirm your account')
    .data({
      name: this.name,
      url: `${config.url}/auth/emails/confirm/${this.emailConfirmCode}`
    })
    .send()
})

UserSchema.methods.generateToken = function() {
  return jwt.sign({ id: this._id }, config.jwtSecret)
}

UserSchema.methods.comparePasswords = function(plainPassword) {
  return Bcrypt.compareSync(plainPassword, this.password)
}

export default mongoose.model('User', UserSchema)
