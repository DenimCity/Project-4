const mongoose = require('mongoose')
const Schema = require('../schema')
const Owner = mongoose.model('Owner', Schema.OwnerSchema)

module.exports = Owner