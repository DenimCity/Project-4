const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

// console.log("hello from schema folder")

const EventSchema = new Schema ({
  owner: {
    type: String
  },
  photo: {
    type: String
  },
  phone: {
    type: String
  }
}, {
  timestamps: {},
  usePushEach: true
})

const HouseSchema = new Schema({
  house_photo: {
    type: String
  },
  amenities: {
    type: String
  },
  description: {
    type: String
  },
  address: {
    type: String
  },
  zip: {
    type: String
  },
  price: {
    type: String
  },
  kitchen: {
    type: String
  },
  bathroom: {
    type: String
  },
  livingroom: {
    type: String
  },
  closet: {
    type: String
  },
  backyard: {
    type: String
  },
}, {
  timestamps: {},
  usePushEach: true
},)

const CitySchema = new Schema({
  city: {
    type: String
  },
  state: {
    type: String
  },
  country: {
    type: String
  },
  photo: {
    type: String
  },
  houses: [HouseSchema]

}, {
  timestamps: {},
  usePushEach: true

},)

const UserSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  photo: {
    type: String,
    default: 'http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png'
  },
  degree: {
    type: String
  },
  school: {
    type: String
  },
  isHost: {
    type: Boolean
  }
}, {
  timestamps: {},
  usePushEach: true
},)

module.exports = {
  UserSchema,
  CitySchema,
  EventSchema,
  HouseSchema
  
}