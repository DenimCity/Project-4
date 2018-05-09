const mongoose = require('mongoose')
const Schema = require('../schema')
const City = mongoose.model('City', Schema)

// console.log('hello from the city schema')
module.exports = City