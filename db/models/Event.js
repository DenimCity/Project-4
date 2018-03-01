const mongoose = require('mongoose')
const Schema = require('../schema')
const Event = mongoose.model('Event', Schema.EventSchema)

// console.log('hello from the event  schema')

module.exports = Event