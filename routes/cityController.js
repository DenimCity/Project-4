const express = require('express')
const City = require('../db/models/City')
const router = express.Router({mergeParams: true})

//to view all the cities
router.get('/', async(request, response) => {
  console.log('hit the get all cities route')
  try {
    const cities = await City.find()
    response.json(cities)
  } catch (error) {
    console.log(`to view all the cities route error ${error}`);
  }
})

//to get one specific city
router.get('/:cityId', async(request, response) => {
  console.log("one city from City")
  const cityId = request.params.cityId
  console.log("cityId", request.params)
  try {
    const city = await City.findById(cityId)
    response.json(city)
  } catch (error) {
    console.log(`to get one pecific city route error ${error}`);
  }
}) 


//to get one specific cities houses
router.get('/:cityId/houses', (request, response) => {
  console.log('hit the cities houses route')
  const cityId = request.params.cityId
  console.log(`line 33, the specific city hit is => ${cityId}`)
  // const house = request.params.houses
  // console.log('house data line 35', house )

  City.findById(cityId)
    .then((city) => {
      const houses = city.houses
      console.log(`line  40: houses in the list are => ${houses}`);
      response.json(houses)
    })
    .catch((error) => {
      console.log(error)
    })
})

//post a new house route in that city
router.post('/:cityId/new/house', async(request, response) => {
  console.log(`we hit the post route forcity`)
  try {
    const cityId = request.params.cityId
    console.log('we found the city affilicated with this post ', cityId)
    const newCity = await City.create(request.body)
    console.log(`the new data coming in should look like${newCity} `)
    response.json(newCity)
  } catch (error) {
    console.log(`post a new house route in that city route error ${error}`);
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
      const house = city.houseId(houseId)
      response.json(house)
    })
    .catch((error) => {
      console.log(`//grab that one individual house by Id route error${error}`);
    })
})
//delete a house in that one specific route city
router.delete('/:cityId/house/:houseId/delete', async(request, response) => {
  console.log(`we hit the delete route`)
  try {
    const houseToDelete = await City.findByIdAndRemove(request.params.houseId)
    console.log(`we found the house to delete the house it should be=>, ${houseToDelete}`)
  } catch (error) {
    console.log(`delete a house in that one specific route city route error ${error}`);
  }
})


module.exports = router
