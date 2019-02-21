
const City = require('../db/models/City')

module.exports = {
  getAllHouse: async (req, res) => {
    await City.findById(cityId)
        .then(city => res.json(city.houses))
        .catch(err => res.status(422).json(err))
  },
  createHouse: async (req, res) => {
    const newHouse =  new House(req.body);
    const city = await City.findById(req.params.cityId)
    city.houses.push(newHouse)
        .then(() => res.json(newHouse))
        .catch(err => res.status(422).json(err))
  },

  getOneHouse: async (req, res) => {
    const cityId = req.params.cityId
    const houseId = req.params.houseId
     await req.params.houseId;
     await City.findById(cityId)
         .then(city => res.json(city.houses.id(houseId)))
         .catch(err => res.status(422).json(err))
  },
  deleteAHouse: async (req, res) => {
    const cityId = req.params.cityId;
    const houseId = req.params.houseId;
    const city = await City.findById(cityId);
    const house = city.houses.id(houseId);
    house.remove();
     await city.save();
    res.json(city);
  }
}



module.exports = router
