require('dotenv').config()
const City = require('./models/City')
const User = require('./models/User')
const House = require('./models/House')
const Owner = require('./models/Owner')

const mongoose = require('mongoose')

// connect to database
mongoose.connect(process.env.MONGODB_URI)
  
  mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
  })
  
  mongoose.connection.on('error', (error) => {
    console.error(`
      MongoDB connection error!!! 
      ${error}
    `)
    process.exit(-1)
  })

  const Jean = new User({
    name: 'Tim2Cunning',
    email: 'Timothy',
    password: 'Livingston',
    photo:'jeanlikedenim',
    degree:'jeanlikedenim',
    school:'Atlanta, Georgia',
    photoUrl: 'https://scontent.cdninstagram.com/t51.2885-15/s640x640/sh0.08/e35/19436484_294868254308560_4898463097905217536_n.jpg',
    isHost: false,
})
const Atlanta = new City ({
  name: "Atlanta", 
  state:"Georgia", 
  country:"US", 
  photo:"https://i.imgur.com/jGyldh4.jpg",
  houses: [{
  
  house_photo:"http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
  amenities:"Dreyer", 
  description: "Nice", 
  address:"Ellie Overpass",
  zip: "48099-2774", 
  price:"$600",
  kitchen:"Dirty",
  bathroom:"nice",
  livingroom: "cool",
  closet:"dirty",
  backyard:"filthy",
  owners:[{
  owner: "Troy", 
  photo:"http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
 phone: "359.764.7139"
}],

}]
})

User.remove({})
  .then(() => {
    console.log('1st seed are planted')
    return Jean.save()
  }),City.remove({}).then(()=>{
    console.log(`Atlanta Saved`)
    return Atlanta.save()
  }).then(() => {
    mongoose.connection.close()
    
    console.log(`
    Finished seeding database...
    
    Disconnected from MongoDB
    `)
}).catch(err => {
  console.log('ERROR SAVING SEEDED DATA !!!!!',err)
})