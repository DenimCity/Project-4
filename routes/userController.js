const express = require('express')
const User = require('../db/models/User')
const router = express.Router()


router.get('/profile', async(request, response) => {
  try {
    const users = await User.find()
    response.json(users)
  } catch (error) {
    console.log(`if you are seeing this, we didn't hit the route, ${error}`)
  }
})

router.get('/signup', (request, response) => {
  try {
    res.json('hey post man can you me?')
  } catch (error) {
    console.log(error)
  }

})
router.get('/signin', (request, response) => {
  try {
    res.json('hey post man can you me?')
  } catch (error) {

  }

})
router.get('/secret', (request, response) => {
  try {
    response.json('hey post man can you me?')
  } catch (error) {
    console.log(errror)

  }

})

module.exports = router