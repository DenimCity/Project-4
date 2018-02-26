const express = require('express')
const City  =require('../db/models/City')
const router = express.Router()
// const bodyParser = require('body-parser')

console.log('here from the city  routes controller folder')


router.get('/', async(request, response) => {
  console.log('hit the get all cities route')
  try {
    const cities = await City.find()
    response.json(cities)
  } catch (error) {
    console.log(`if you are seeing this, we didn't hit the city route, ${error}`)
  }
})



module.exports = router