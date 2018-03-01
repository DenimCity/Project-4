const express = require('express')
const router = express.Router()
const axios = require('axios')
// client_id=mbi7l1jrg51rv7lbjaf8dfpl6b
// &client_secret=tg27hcatj9p4fsq1qv5o47c4qf &grant_type=refresh_token
// &refresh_token=REFRESH_TOKEN_YOU_RECEIVED_FROM_ACCESS_RESPONSE
// console.log('hello from the meetup event controller')

router.get('/miami', async(request, response) => {
  console.log('hit the meetup controller ')

  axios
    .get(`https://api.meetup.com/find/groups?key=5925344941254c58525c1e477174124&photo-host=public&location=Miami&page=5&sig_id=245595678&sig=8daa81f3cdd70065320c6561bea8addc5398f08e`)
    .then((response)=> {
      return response.data
      
    }).then((miami)=> {
      response.json(miami)
    }).catch((error)=>{
      console.log('no data found',error);
    })

})
router.get('/atlanta', async(request, response) => {
  console.log('hit the meetup controller ')

  axios
    .get(`https://api.meetup.com/find/groups?key=5925344941254c58525c1e477174124&photo-host=public&location=Atlanta%2CGa&page=20&sig_id=245595678&sig=6cf7a038a4f9a98787a82fcf8aae96915e2a55eb`)
    .then((response)=> {
      return response.data
    }).then((miami)=> {
      response.json(miami)
    }).catch((error)=>{
      console.log('no data found',error);
    })

})
router.get('/la', async(request, response) => {
  console.log('hit the meetup controller ')

  axios
    .get(`https://api.meetup.com/find/groups?key=5925344941254c58525c1e477174124&photo-host=public&location=los+angeles&page=1&sig_id=245595678&sig=3794f40556d38e63ff33b89439c6aa52680d9cbb`)
    .then((response)=> {
      return response.data
    }).then((miami)=> {
      response.json(miami)
    }).catch((error)=>{
      console.log('no data found',error);
    })

})
router.get('/newyork', async(request, response) => {
  console.log('hit the meetup controller ')

  axios
    .get(`https://api.meetup.com/find/groups?key=5925344941254c58525c1e477174124&photo-host=public&location=New+York&page=20&sig_id=245595678&sig=84e56927e5bce3de07c37ad434c0dd30a91ef1f1`)
    .then((response)=> {
      return response.data
    }).then((miami)=> {
      response.json(miami)
    }).catch((error)=>{
      console.log('no data found',error);
    })

})

module.exports = router
