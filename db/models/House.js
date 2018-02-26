const mongoose = require('mongoose')
const Schema = require('../schema')
const House = mongoose.model('House', Schema.HouseSchema)

module.exports = House