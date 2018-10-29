const express = require('express')
const City = require('../db/models/City')
const router = express.Router({mergeParams: true})


router.get('/', async(request, response) => {
  try {
    const cities = await City.find()
    response.json(cities)
  } catch (error) {
    console.log(`to view all the cities route error ${error}`);
  }
})


router.get('/:cityId', async(request, response) => {
  const cityId = request.params.cityId
  try {
    const city = await City.findById(cityId)
    response.json(city)
  } catch (error) {
    console.log(`to get one pecific city route error ${error}`);
  }
})



module.exports = router
