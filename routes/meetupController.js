const express = require('express')
const router = express.Router()
const axios = require('axios')
router.get('/miami', async(request, response) => {
  // console.log('hit the miami controller ')

  axios
    .get(`https://api.meetup.com/find/groups?key=${process.env.EVENT_KEY}&photo-host=public&location=Miami&page=2&sig_id=245595678&sig=8daa81f3cdd70065320c6561bea8addc5398f08e`)
    .then((response)=> {
      return response.data
      
    }).then((miami)=> {
      response.json(miami)
    }).catch((error)=>{
      console.log('no data found',error);
    })

})
router.get('/atlanta', async(request, response) => {
  // console.log('hit the meetup controller ')

  axios
    .get(`https://api.meetup.com/find/groups?key=${process.env.EVENT_KEY}&photo-host=public&location=Atlanta%2CGa&page=3&sig_id=245595678&sig=6cf7a038a4f9a98787a82fcf8aae96915e2a55eb`)
    .then((response)=> {
      return response.data
    }).then((atlanta)=> {
      response.json(atlanta)
    }).catch((error)=>{
      console.log('no data found',error);
    })

})
router.get('/la', async(request, response) => {
  console.log('hit the meetup controller ')

  axios
    .get(`https://api.meetup.com/find/groups?key=${process.env.EVENT_KEY}&photo-host=public&location=los+angeles&page=1&sig_id=245595678&sig=3794f40556d38e63ff33b89439c6aa52680d9cbb`)
    .then((response)=> {
      return response.data
    }).then((la)=> {
      response.json(la)
    }).catch((error)=>{
      console.log('no data found',error);
    })

})
router.get('/newyork', async(request, response) => {
  // console.log('hit the meetup controller ')

  axios
    .get(`https://api.meetup.com/find/groups?key=${process.env.EVENT_KEY}&photo-host=public&location=New+York&page=4&sig_id=245595678&sig=84e56927e5bce3de07c37ad434c0dd30a91ef1f1`)
    .then((response)=> {
      return response.data
    }).then((newyork)=> {
      response.json(newyork)
    }).catch((error)=>{
      console.log('no data found',error);
    })
})

module.exports = router
