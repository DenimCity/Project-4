const express = require('express')
const City = require('../db/models/City')
const router = express.Router({mergeParams: true})

//get all the houses
router.get('/', (request, response) => {
  console.log('hit houses route');
  const cityId = request.params.cityId
  console.log(cityId);
  City
    .findById(cityId)
    .then((city) => {
    const houses = city
      response.json(houses)
    })
    .catch((error) => {
      console.log(error)
    })
})

// //post a new house route in that city
router.post('/new', async (request, response) => {
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

router.get('/:houseId', async (request, response) => {
  try {
    const cityId = request.params.cityId
    const houseId = request.params.houseId
    const city = await City
      .findById(cityId)
      .then((city) => {
        response.json(city.houses.id(houseId))
      })
  } catch (error) {
    console.log(err);
  }

})

router.delete('/:houseId', async (request, response) => {
  try {
    const cityId = request.params.cityId
    const houseId = request.params.houseId
    const city = await City.findById(cityId)
    house = city.houses.id(houseId)
    house.remove()
    const saved = await city.save()
    response.json(city)
  } catch (err) {
    console.log(err)
  }
})

module.exports = router