const express = require('express')
const User = require('../db/models/User')
const router = express.Router()
// const bodyParser = require('body-parser')


// console.log('here from the user routes controller folder')

router.get('/profile', async(request, response) => {
  // console.log('hit  the user profile route')
  try {
    const users = await User.find()
    response.json(users)
    // response.json(testJson)
  } catch (error) {
    console.log(`if you are seeing this, we didn't hit the route, ${error}`)
  }
})


// router.get('/:userId', (reqquest, response) => {
//   const userId = req.params.userId

//   User.findById(userId)
//     .then((user) => {
//       response.json(user)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// })

// //to create new user
// router.post('/', async(req, res) => {
//   try {
//     const newUser = await User.create(req.body)
//     res.json(newUser)
//   } catch (error) {
//     console.log(error)
//   }
// })

// //to delete a user
// router.delete('/:userId/delete', async (req,res)=> {
//   console.log('here from  the delete controller, you hit the route')
//   try {
//     const user = await User.findByIdAndRemove(req.params.userId)
//     console.log(" i found the user and about to delete but user is", req.params.userId)
//     console.log("from delete controller: we grabbed the user to delete", user)

//     res.json(user)
//   }catch(error){
//     res.send(error)
//   }
// })

// ///to update a user
// router.patch('/:userId', (req,res)=> {
//   const userId = req.params.userId
//   const updateInfo = req.body
//   User.findByIdAndUpdate(userId, updateInfo)
//   .then(()=> {
//     res.json()
//   }).catch((error)=>{
//     console.log(error)
//   })
// })

router.get('/signup', (request, response) => {
  try {
    console.log('hit the signUP route')
    res.json('hey post man can you me?')
  } catch (error) {}

})
router.get('/signin', (request, response) => {
  try {
    console.log('hit the signIn route')
    res.json('hey post man can you me?')
  } catch (error) {

  }

})
router.get('/secret', (request, response) => {
  try {
    console.log('hit the secret route')
    response.json('hey post man can you me?')
  } catch (error) {

  }

})

module.exports = router