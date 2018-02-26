const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise



const OwnerSchema = new Schema ({


})

const HouseSchema = new Schema ({


})
const CitySchema = new Schema ({


}) 

const UserSchema = new Schema ({

})


module.exports = {
  UserSchema,
  CitySchema,
  HouseSchema,
  OwnerSchema,
}