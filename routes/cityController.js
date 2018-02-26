const express = require('express')
const { City } =require('../db/schema')
const router = express.Router()

console.log('here from the city  routes controller folder')




// router.get('/profile', async(req, res) => {
//   try {
//     const users = await User.find({})
//     res.json(users)
//   } catch (error) {
//     console.log(error)
//   }
// })// router.get('/signup', (req, res) => {
// //   try {
// //     console.log('hit the signUP route')
// //     res.json('hey post man can you me?')
// //   } catch (error) {
    
// //   }
  
// // })
// // router.get('/signin', (req, res) => {
// //   try {
// //     console.log('hit the signIn route')
// //     res.json('hey post man can you me?')
// //   } catch (error) {
    
// //   }
  
// // })
// // router.get('/secret', (req, res) => {
// //   try {
// //     console.log('hit the secret route')
// //     res.json('hey post man can you me?')
// //   } catch (error) {
    
// //   }
  
// // })



module.exports = router