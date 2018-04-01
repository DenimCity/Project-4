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

const Atlanta = new City({
  name: "Atlanta", state: "Georgia", country: "US", photo: "https://i.imgur.com/jGyldh4.jpg"})




const house1 = new House({
  city_name: "Atlanta",
  house_photo: "https://a0.muscache.com/im/pictures/96fef64d-1cdf-488b-a817-ee7f85e40219.jpg?aki" +
      "_policy=xx_large",
  amenities: "Kitchen, Cable TV, Wifi, Indoor fireplace",
  description: `5 bedrooms, 3.5 baths, living room, formal dining, informal dining, den, living room, foyer, gourmet kitchen, and laundry room.`,
  address: "49384 Shane PlainsEllie Overpass",
  longitude: '33.7719° N',
  latitude: '84.3665° W',
  price: "$600",
  owner: "Tate Kent",
  owner_photo: "https://i.imgur.com/FYdgUhz.jpg",
  owner_phone: "359.764.7139",
  owner_email:"tate.kent@gmail.com",
})

const house2 = new House({
  city_name: "Atlanta",
  house_photo: "https://a0.muscache.com/im/pictures/32956562/3eefc762_original.jpg?aki_policy=x_" +
      "large",
  amenities: "Wifi, Cable, Gym",
  description: "This condo is an exceptional retreat in the heart of the city and provides super" +
      "b access to the city's premier attractions!",
  address: "7954 Maryse IslandEllie Overpass",
  longitude: '33.8463° N',
  latitude: '84.3621° W',
  price: "$700",
  owner: "Knowles Ellis",
  owner_photo: "https://i.imgur.com/llS7sCc.jpg",
  owner_phone: "897.457.2370",
  owner_email:"diane.reed@undefined.com"
})
const house3 = new House({
  city_name: "Atlanta",
  house_photo: "https://a0.muscache.com/im/pictures/59329664/e5e7ca32_original.jpg?aki_policy=x_large",
  amenities: "Washer,Dryer, Cable",
  description: "This 185 square foot gem sits in our Cabbagetown backyard. A perfect retreat in " +
      "the middle of Intown Atlanta. ",
  address: "476 Leuschke TunnelEllie Overpass",
  longitude: '33.8804° N',
  latitude: '84.4687° W',
  price: "$800",
  owner: "Brooke Pate",
  owner_photo: "https://i.imgur.com/S3sGKnu.jpg",
  owner_phone: "299.969-4776",
  owner_email:"brooke.pate@gmail.com"
})
Atlanta
  .houses
  .push(house1, house2, house3)

const Miami = new City({name: "Miami", state: "Florida", country: "US", photo: "https://i.imgur.com/e5p5fnD.jpg"})
const house4 = new House({
  city_name: "Miami",
  house_photo: "https://a0.muscache.com/im/pictures/49939893/f83fce6c_original.jpg?aki_policy=xx_large",
  amenities: "Paradise living in a quiet safe neighborhood.",
  description: "Right by the Ocean with direct Ocean access",
  address: "Bernard TerraceEllie Overpass",
  longitude: '',
  latitude: '',
  price: "$500",
  owner: "Jewell Dominguez",
  owner_photo: "https://i.imgur.com/f3WIKxA.jpg",
  owner_phone: "935.505.2246",
  owner_email:"jewell.dominguez@gmail.com"
})

const house5 = new House({
  city_name: "Miami",
  house_photo: "https://a0.muscache.com/im/pictures/36873442/2eaf770b_original.jpg?aki_policy=xx_large",
  amenities: "Wifi, Laptop friendly workspace, Elevator",
  description: "This house is a great location to explore South Florida.",
  address: "1610 Raynor FieldsEllie Overpass",
  longitude: '',
  latitude: '',
  price: "$800",
  owner: "Michelle Casey",
  owner_photo: "https://i.imgur.com/lko39vz.jpg",
  owner_phone: "962.461.2141",
  owner_email:"michelle.casey@gmail.com"

})
const house6 = new House({
  city_name: "Miami",
  house_photo: "https://a0.muscache.com/im/pictures/88b75729-43df-4126-92ae-adea5df1b6a4.jpg?aki_policy=xx_large",
  amenities: "Pool, Kitchen, Wifi ",
  description: "Walking distance to bars, restaurants and arts venues",
  address: "980 Wehner PrairieEllie Overpass",
  longitude: '',
  latitude: '',
  price: "$1000",
  owner: "Malone Spears",
  owner_photo: "https://i.imgur.com/Y5LWTra.jpg",
  owner_phone: "895.490.2090",
  owner_email:"malone.spears@gmail.com"
})

Miami
  .houses
  .push(house4, house5, house6)

const LA = new City({name: "Los Angeles", state: "California", country: "US", photo: "http://www.mbdalosangeles.org/uploads/1/0/6/0/10602258/hdr-losangeles1_orig.jpg"})
const house7 = new House({
  city_name: "Los Angeles",
  house_photo: "https://a0.muscache.com/im/pictures/a85d04ad-adac-4ed2-951b-b40730d8ea9e.jpg?aki_policy=xx_large",
  amenities: "Wifi, Kitchen, Wifi ",
  description: "Beautiful modern house, with undeground garage",
  address: "0235 Zemlak JunctionEllie Overpass",
  longitude: '',
  latitude: '',
  price: "$1500",
  owner: "Jean Nixon",
  owner_photo: "https://i.imgur.com/srlfBko.jpg",
  owner_phone: "925.546.3304",
  owner_email:"jean.nixon@gmail.com"
})

const house8 = new House({
  city_name: "Los Angeles",
  house_photo: "https://a0.muscache.com/im/pictures/75756707/5d76182c_original.jpg?aki_policy=xx_large",
  amenities: "Pool, Kitchen, Wifi",
  description: "Live a local's life in the heart of Miami",
  address: "05311 Mariana PineEllie Overpass",
  longitude: '',
  latitude: '',
  price: "$300",
  owner: "Marco Wood",
  owner_photo: "https://i.imgur.com/WNpGmAu.jpg",
  owner_phone: "900.519.3255",
  owner_email:"marco.wood@gmail.com"
})
const house9 = new House({
  city_name: "Los Angeles",
  house_photo: "https://a0.muscache.com/im/pictures/6459516/40072931_original.jpg?aki_policy=x_large",
  amenities: "Breakfast, Wifi, Cable Tv",
  description: "The view of the City is Amazing",
  address: "64784 Parker BrooksEllie Overpass",
  longitude: '',
  latitude: '',
  price: "$600",
  owner: "Flores Bond",
  owner_photo: "https://i.imgur.com/uw4FOZv.jpg",
  owner_phone: "858.450.2965",
  owner_email:"flores.bond@gmail.com"
})

LA
  .houses
  .push(house7, house8, house9)

const NewYork = new City({name: "New York City", state: "New York", country: "US", photo: "https://i.imgur.com/VKWt9BC.jpg"})
const house10 = new House({
  city_name: "New York",
  house_photo: "https://a0.muscache.com/im/pictures/79096753/78ce1912_original.jpg?aki_policy=xx_large",
  amenities: "Kitchen, Wifi, Gym",
  description: "Equipped with a modern kitchen & 3 bathrooms",
  address: "468 Reynolds PlazaEllie Overpass",
  longitude: '',
  latitude: '',
  price: "$800",
  owner: "Karen Atkinson",
  owner_photo: "https://i.imgur.com/6cwZ4Y7.jpg",
  owner_phone: "858.450.2965",
  owner_email:"karen.atkins@gmail.com"
})

const house11 = new House({
  city_name: "New York",
  house_photo: "https://a0.muscache.com/im/pictures/78293381/7710a59f_original.jpg?aki_policy=x_large",
  amenities: "Elevator, Patio, Wifit",
  description: "Partially surrounded by a covered patio on two sides.",
  address: "16118 Crooks RoadEllie Overpass",
  longitude: '',
  latitude: '',
  price: "$700",
  owner: "Savannah Sanders",
  owner_photo: "https://i.imgur.com/Qj1WVQB.jpg",
  owner_phone: "359.764.7139",
  owner_email:"savannah.sanders@gmail.com"
})
const house12 = new House({
  city_name: "New York",
  house_photo: "https://a0.muscache.com/im/pictures/52748667/bb09b61b_original.jpg?aki_policy=xx_large",
  amenities: "Washer, Dryer, Kitchen",
  description: "Old-fashioned kitchen, modern bathroom, small living room, a small dining room",
  address: "3234 Johnathan MountainEllie Overpass",
  longitude: '',
  latitude: '',
  price: "$300",
  owner: "Gardner Wheeler",
  owner_photo: "https://i.imgur.com/sDVPVPl.jpg",
  owner_phone: "359.764.7139",
  owner_email:"gardner.wheeler@gmail.com"
})

NewYork
  .houses
  .push(house10, house11, house12)

//seed for users
const Jean = new User({
  name: "Jean",
  email: "jean@aol.com",
  photo: "http://www.clipartlord.com/wp-content/uploads/2014/04/egg4.png",
  school: "Florida A&M",
  degree: "BA",
  isHost: true
})

const test = new Event({
name:"test1",
description:"testing2",
photo:"testingpic",
category:"testing category"
})


Event
  .remove({})
  .then(() => {
    console.log(`saved => test`)
    return test.save()

  })
User
  .remove({})
  .then(() => {
    console.log(`saved => Jean`)
    return Jean.save()
  })

House
  .remove({})
  .then(() => {
    console.log('deleted => houses');
  })

City
  .remove({})
  .then(() => {
    console.log(`saved => Miami`)
    return Miami
      .save()
      .then(() => {
        console.log(`saved => LA `)
        return LA.save()
      })
      .then(() => {
        console.log(`saved => New York`)
        return NewYork.save()
      })
      .then(() => {
        console.log(`saved => Atlanta `)
        return Atlanta.save()
      })

  })
  .then(() => {
    mongoose
      .connection
      .close()

    console.log(`
  Finished seeding database...Disconnected from MongoDB`)
  })
  .catch(err => {
    console.log('ERROR SAVING SEEDED DATA !!!!!', err)
  })