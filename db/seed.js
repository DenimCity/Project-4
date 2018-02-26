require('dotenv').config()
const City = require('./models/City')
const User = require('./models/User')
const House = require('./models/House')
const Event = require('./models/Event')

const mongoose = require('mongoose')

// connect to database
mongoose.connect(process.env.MONGODB_URI)

mongoose
  .connection
  .once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
  })

mongoose
  .connection
  .on('error', (error) => {
    console.error(`
      MongoDB connection error!!! 
      ${error}
    `)
    process.exit(-1)
  })

    
// seed for cities    

    const Atlanta = new City({name: "Atlanta", state: "Georgia", country: "US", photo: "https://i.imgur.com/jGyldh4.jpg"})
    const house1 = new House({
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      closet: "dirty",
      backyard: "filthy"
    })

    const house2 = new House({
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      closet: "dirty",
      backyard: "filthy",
      Event: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      phone: "359.764.7139"
    })
    const house3 = new House({
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      closet: "dirty",
      backyard: "filthy",
      Event: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      phone: "359.764.7139"
    })
    Atlanta.houses.push(house1, house2, house3)


    const Miami = new City({name: "Miami", state: "Florida", country: "US", photo: "https://i.imgur.com/jGyldh4.jpg"})
    const house4 = new House({
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      closet: "dirty",
      backyard: "filthy"
    })

    const house5 = new House({
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      closet: "dirty",
      backyard: "filthy",
      Event: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      phone: "359.764.7139"
    })
    const house6 = new House({
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      closet: "dirty",
      backyard: "filthy",
      Event: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      phone: "359.764.7139"
    })

    Miami.houses.push(house4, house5, house6)


    const LA = new City({name: "Los Angelous", state: "California", country: "US", photo: "https://i.imgur.com/jGyldh4.jpg"})
    const house7 = new House({
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      closet: "dirty",
      backyard: "filthy"
    })

    const house8 = new House({
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      closet: "dirty",
      backyard: "filthy",
      Event: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      phone: "359.764.7139"
    })
    const house9 = new House({
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      closet: "dirty",
      backyard: "filthy",
      Event: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      phone: "359.764.7139"
    })

    LA.houses.push(house6, house7, house9)


    const NewYork = new City({name: "New York City", state: "New York", country: "US", photo: "https://i.imgur.com/jGyldh4.jpg"})
    const house10 = new House({
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      closet: "dirty",
      backyard: "filthy"
    })

    const house11 = new House({
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      closet: "dirty",
      backyard: "filthy",
      Event: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      phone: "359.764.7139"
    })
    const house12 = new House({
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      closet: "dirty",
      backyard: "filthy",
      Event: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      phone: "359.764.7139"
    })

    NewYork.houses.push(house10, house11, house12)
   
    //seed for users  
  const Jean = new User({
    name: "Jean",
    email:"jean@aol.com",
    photo:"http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
    school:"Florida A&M",
    degree: "BA",
    isHost:true,

})


    
User.remove({})
  .then(() => {
    console.log(`the user Jean was saved ${Jean}`)
    return Jean.save()
  })
    
  City.remove({}).then(()=> { 
    // console.log(`the data of Miam , here is the data${Miami}`)
      return Miami.save()
      .then(()=>{
        // console.log(`the data of LA , here is the data ${LA}`)
        return LA.save()
      }).then(()=>{
        // console.log(`the data of NewYork , here is the data${NewYork}`)
        return NewYork.save()
      }).then(()=>{
        // console.log(`the data of Atlanta , here is the data ${Atlanta}`)
        return Atlanta.save()
      })

  }).then(() => {
    mongoose
      .connection
      .close()

    console.log(`
  Finished seeding database...
  
  Disconnected from MongoDB
  `)
  })
  .catch(err => {
    console.log('ERROR SAVING SEEDED DATA !!!!!', err)
  })
