const mongoose = require('mongoose')
const Schema = require('../schema')
const House = mongoose.model('House', Schema.HouseSchema)
console.log('hello from in the house schema')




module.exports = House