const mongoose = require('mongoose')
const Schema = require('../schema')
const City = mongoose.model('City', Schema.CitySchema)

module.exports = City