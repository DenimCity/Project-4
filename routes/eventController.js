const express = require('express')
const Event = require('../db/models/Event')
const router = express.Router({mergeParams: true})


//get all events
router.get('/', async(request, response) => {
  console.log('hit the get all cities route')
  try {
    const cities = await City.find()
    response.json(cities)
  } catch (error) {
    console.log(`to view all the cities route error ${error}`);
  }
})


module.exports = router