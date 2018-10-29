const mongoose = require('mongoose')
const Schema = require('../schema')
const User = mongoose.model('User', Schema.UserSchema)

// console.log('hello from user schema')
module.exports = User