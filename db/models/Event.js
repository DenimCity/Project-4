const mongoose = require('mongoose')
const Schema = require('../schema')
const Event = mongoose.model('Event', Schema)
module.exports = Event