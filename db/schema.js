const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise



const OwnerSchema = new Schema ({
  owner: {type: String}, 
  photo:{type: String},
 phone: {type: String}, 
},{usePushEach: true},)

const HouseSchema = new Schema ({
  house_photo:{type: String},
  amenities:{type: String}, 
  description: {type: String}, 
  address:{type: String},
  zip: {type: String}, 
  price:{type: String},
  kitchen:{type: String},
  bathroom:{type: String},
  livingroom: {type: String},
  closet:{type: String},
  backyard:{type: String},
  owners:[OwnerSchema] 
},{usePushEach: true},)

const CitySchema = new Schema ({
  name: {type: String}, 
  state:{type: String}, 
  country:{type: String}, 
  photo:{type: String},
  houses: [HouseSchema]

},{usePushEach: true},
) 

const UserSchema = new Schema ({
  name:{type: String},
  email: {type: String},
  password: {type: String},
  photo: {type: String,default: 'http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png'},
  degree:{type: String},
  school:{type: String},
  isHost:{type: Boolean},
  
},{usePushEach: true},
)




module.exports = {
  UserSchema,
  CitySchema,
  HouseSchema,
  OwnerSchema,
}