const express = require('express')
const City = require('../db/models/City')
const House = require('../db/models/House')
const router = express.Router({mergeParams: true})

console.log('hit the houses controller')

//get all the houses
router.get('/', (request, response) => {
  const cityId = request.params.cityId
  const houseId = request.params.id
  City
    .findById(cityId)
    .then((city) => {
      const houses = city.houses
      response.json(houses)
    })
    .catch((error) => {
      console.log(error)
    })
})

// //post a new house route in that city
router.post('/new', async(request, response) => {
  console.log('hit the new house route')
  try {
    const newHouse = new House(request.body)
    console.log('here is the new house ', newHouse)
    const city = await City.findById(request.params.cityId) //
    console.log('we found the city ', city)
    city
      .houses
      .push(newHouse)
    const saved = await city.save()
    response.json(saved)
  } catch (error) {
    console.log(error)
  }
})

router.get('/:id', async(request, response) => {
  try {
    const cityId = request.params.cityId
    const houseId = request.params.id
    const city = await City
      .findById(cityId)
      .then((city) => {
        response.json(city.houses.id(houseId))
      })
  } catch (error) {
    console.log(err);
  }

})

router.get('/:id/delete', async(request, response) => {
  console.log('trrget');
  console.log("Deleting:", request.params)
  try {
    // const cityId = request.params.id console.log(cityId) const houseId =
    // request.params.id console.log(houseId) const city = await
    // City.findById(cityId) // console.log(city) house = city.houses.id(houseId)
    // house.remove() response.json(city)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router