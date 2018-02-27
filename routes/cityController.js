const express = require('express')
const City = require('../db/models/City')
const router = express.Router({mergeParams: true})

//to view all the cities
router.get('/', async(request, response) => {
  // console.log('hit the get all cities route')
  try {
    const cities = await City.find()
    response.json(cities)
  } catch (error) {
    console.log(`if you are seeing this, than we didnt hit the delete route for the city ${error}`);
  }
})
//to get one specific city
router.get('/:cityId', async(request, response) => {
  const cityId = request.params.cityId
  // console.log("if you see this, than the city id should be =>", cityId)
  try {
    const houses = await City.findById(cityId)
    response.json(houses)
  } catch (error) {
    console.log(`if you are seeing this, than we didnt hit the delete route for the city ${error}`);
  }
})

//post a new house route in that city
router.post('/:cityId/new/house', async(request, response) => {
  console.log(`we hit the post route for city`)
  try {
    const cityId = request.params.cityId
    console.log('we found the city affilicated with this post ', cityId)
    const newCity = await City.create(request.body)
    console.log(`the new data coming in should look like${newCity} `)
    response.json(newCity)
  } catch (error) {
    console.log(`if you are seeing this, than we didnt hit the delete route for the city ${error}`);
  }
})
//delete a house in that one specific route city
router.delete('/:cityId/house/:houseId/delete', async(request, response) => {
  console.log(`we hit the delete route`)
  try {
    const houseToDelete = await City.findByIdAndRemove(request.params.houseId)
    console.log(`we found the house to delete the house it should be=>, ${houseToDelete}`)
  } catch (error) {
    console.log(`if you are seeing this, than we didnt hit the delete route for the city ${error}`);
  }
})

//grab that one individual house by Id
router.get('/:cityId/houses/:houseId', (request, response) => {
  const cityId = request.params.cityId
  console.log(`we grabbed the city id ${cityId}`)
  const houseId = request.params.houseId
  console.log(`whe grabbed the house by Id ${houseId}`)

  City
    .findById(cityId)
    .then((city) => {
      const house = city
        .houses
        .id(houseId)
      response.json(house)
    })
    .catch((error) => {
      console.log(`if you are seeing this, than we didnt hit the delete route for the city ${error}`);
    })
})

module.exports = router
