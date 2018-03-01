const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise

// console.log("hello from schema folder")

const EventSchema = new Schema({
  name: {
    type: String,
    required:true,
    unique:true,
    minlength: [5, 'Name must be 5 Characters long']
  },
  description: {
    type: String,
    required:true,
    minlength:[5, 'Description must be 5 characters long']
  },
  photo: {
    type: String
  },
  category:{
    type: String,
  }
}, {
  timestamps: {},
  usePushEach: true
})

const HouseSchema = new Schema({
  city_name: {
    type: String
  },
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
  longitude: {
    type: String
  },
  latitude: {
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
  owner: {
    type: String
  },
  owner_photo: {
    type: String
  },
  owner_phone: {
    type: String
  },
  livingroom: {
    type: String
  }
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
  name: {type: String
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