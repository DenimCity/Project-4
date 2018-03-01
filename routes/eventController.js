const express = require('express')
const Event = require('../db/models/Event')
const router = express.Router({mergeParams: true})

router.get('/', async (request, response)=>{
console.log(`we hit the view app events routes`)
try {
  const events = await Event.find({})
  response.json(events)
} catch (error) {
  console.log('could not obtain events',error)
  response.json('postman: result error')
}
})

//post a new event 
router.post('/create', async(request, response) => {
  console.log(`hit the create event route`);
  try {
      console.log('The data we are creating looks like => ', request.body)
      const newEvent = await Event.create(request.body)
      response.json(newEvent)
  } catch (error) {
      console.log("Couldn't create user:", error)
      response.sendStatus(500)
  }
})

router.delete('/:eventsId/delete', async (response, request)=> {
  console.log(`here from the delete route`)
  try {
    const event = await Event.findByIdAndRemove(request.params.eventsId)
    console.log('we grabbed teh event Id', event)
    response.json(event)
  } catch (error) {
    console.log('could not delete',error )  
  }
})


router.patch('/eventId', async (response, request)=>{


})
module.exports = router