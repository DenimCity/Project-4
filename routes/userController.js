const express = require('express')
// const { User } =require('../db/schema')
const router = express.Router()


router.get('/signup', (req, res) => {
  try {
    console.log('hit the signUP route')
    res.json('hey post man can you me?')
  } catch (error) {
    
  }
  
})
router.get('/signin', (req, res) => {
  try {
    console.log('hit the signIn route')
    res.json('hey post man can you me?')
  } catch (error) {
    
  }
  
})
router.get('/secret', (req, res) => {
  try {
    console.log('hit the secret route')
    res.json('hey post man can you me?')
  } catch (error) {
    
  }
  
})



module.exports = router