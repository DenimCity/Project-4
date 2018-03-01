const express = require('express')
// const User = require('../db/models/User')
const fetch = require('node-fetch')
const router = express.Router()
// client_id=mbi7l1jrg51rv7lbjaf8dfpl6b
// &client_secret=tg27hcatj9p4fsq1qv5o47c4qf &grant_type=refresh_token
// &refresh_token=REFRESH_TOKEN_YOU_RECEIVED_FROM_ACCESS_RESPONSE


// console.log('hello from the meetup event controller')

router.get('/', async (request, response) => {
  console.log('hit the meetup controller ')
  // fetch(`https://api.meetup.com/find/groups?key=5925344941254c58525c1e477174124&photo-host=public&location=Miami&page=5&sig_id=245595678&sig=8daa81f3cdd70065320c6561bea8addc5398f08e`)
  //   .then(response.json())
 
  //   .then(json => console.log(json))
  try {
    fetch(`github.com`)
      .then(response.json())
      .then(json => console.log(json))
    
  } catch (error) {
    console.log('error', error);
  }
})

module.exports = router
