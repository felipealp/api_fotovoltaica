const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  login: {
    type: String,
    required: true
  },

  senha: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }

})

UserSchema.plugin(mongoosePaginate)
mongoose.model('User', UserSchema)