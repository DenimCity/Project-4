require('dotenv').config()
const City = require('./models/City')
const User = require('./models/User')
const House = require('./models/House')
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

    const Atlanta = new City({city: "Atlanta", state: "Georgia", country: "US", photo: "https://i.imgur.com/jGyldh4.jpg"})
    const house1 = new House({
      city_name:"Atlanta",
      house_photo: "https://a0.muscache.com/im/pictures/96fef64d-1cdf-488b-a817-ee7f85e40219.jpg?aki_policy=xx_large",
      amenities: "Kitchen, Cable TV, Wifi, Indoor fireplace",
      description: `5 bedrooms, 3.5 baths, living room, formal dining, informal dining, den, living room, foyer, gourmet kitchen, and laundry room.`,
      address: "Ellie Overpass",
      zip: "30308",
      price: "$600",
      kitchen: "https://a0.muscache.com/im/pictures/29bf93fe-f33e-4b83-aa39-8196d64233bd.jpg?aki_policy=x_large",
      bathroom: "https://a0.muscache.com/im/pictures/0691c9ad-93f9-4815-a8fa-d3cfcd147138.jpg?aki_policy=x_large",
      livingroom: "https://a0.muscache.com/im/pictures/b5f6d818-4033-4e80-a19a-93be5eb8f0db.jpg?aki_policy=x_large",
      owner: "Tony",
      owner_photo: "https://i.imgur.com/VopCByG.jpg",
      owner_phone: "359.764.7139"
    })

    const house2 = new House({
      city_name:"Atlanta",
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      owner: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      owner_phone: "359.764.7139"
    })
    const house3 = new House({
      city_name:"Atlanta",
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      owner: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      owner_phone: "359.764.7139"
    })
    Atlanta.houses.push(house1, house2, house3)


    const Miami = new City({city: "Miami", state: "Florida", country: "US", photo: "https://i.imgur.com/e5p5fnD.jpg"})
    const house4 = new House({
      city_name:"Miami",
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      owner: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      owner_phone: "359.764.7139"
    })

    const house5 = new House({
      city_name:"Miami",
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      owner: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      owner_phone: "359.764.7139"
    })
    const house6 = new House({
      city_name:"Miami",
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      owner: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      owner_phone: "359.764.7139"
    })

    Miami.houses.push(house4, house5, house6)


    const LA = new City({city: "Los Angelous", state: "California", country: "US", photo: "http://www.mbdalosangeles.org/uploads/1/0/6/0/10602258/hdr-losangeles1_orig.jpg"})
    const house7 = new House({
      city_name:"Los Angeles",
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      owner: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      owner_phone: "359.764.7139"
    })

    const house8 = new House({
      city_name:"Los Angeles",
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      owner: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      owner_phone: "359.764.7139"
    })
    const house9 = new House({
      city_name:"Los Angeles",
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      owner: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      owner_phone: "359.764.7139"
    })

    LA.houses.push(house7, house8, house9)


    const NewYork = new City({city: "New York City", state: "New York", country: "US", photo: "https://i.imgur.com/VKWt9BC.jpg"})
    const house10 = new House({
      city_name:"New York",
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      owner: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      owner_phone: "359.764.7139"
    })

    const house11 = new House({
      city_name:"New York",
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      owner: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      owner_phone: "359.764.7139"
    })
    const house12 = new House({
      city_name:"New York",
      house_photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      amenities: "Dreyer",
      description: "Nice",
      address: "Ellie Overpass",
      zip: "48099-2774",
      price: "$600",
      kitchen: "Dirty",
      bathroom: "nice",
      livingroom: "cool",
      owner: "Tony",
      photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
      owner_phone: "359.764.7139"
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
    console.log(`saved => Jean`)
    return Jean.save()
  })
    
  City.remove({}).then(()=> { 
    console.log(`saved => Miami`)
      return Miami.save()
      .then(()=>{
        console.log(`saved => LA `)
        return LA.save()
      }).then(()=>{
        console.log(`saved => New York`)
        return NewYork.save()
      }).then(()=>{
        console.log(`saved => Atlanta `)
        return Atlanta.save()
      })

  }).then(() => {
    mongoose
      .connection
      .close()

    console.log(`
  Finished seeding database...Disconnected from MongoDB`)
  })
  .catch(err => {
    console.log('ERROR SAVING SEEDED DATA !!!!!', err)
  })
