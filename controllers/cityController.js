const express = require('express')
const City = require('../db/models/City')
const router = express.Router({mergeParams: true})


// const findAll = async (req, res) => {
//   await City.find()
//       .then(cities => res.json(cities))
//       .catch(err => res.status(422).json(err));
// };
//
// const findOne = async (req, res) => {
//   await City.findById( req.params.cityId )
//       .then( city => res.json(city))
//       .catch(err => res.status(422).json(err))
// };


module.exports = {
  findAll: async (req, res) => {
    await City.find()
        .then( cities => res.json(cities))
        .catch(err => res.status(422).json(err))
  },

  findOne: async (req, res) => {
    await City.findById( req.params.cityId )
        .then( city => res.json(city))
        .catch(err => res.status(422).json(err))
  }
};

// module.exports = {
//   findAll,
//   findOne
// }



