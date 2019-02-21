const router = require("express").Router({mergeParams: true});
const cityController = require("../../controllers/cityControllerController");
const eventController = require("../../controllers/eventController");
const houseController = require('../../controllers/houseController');

/// setup meetup controller next
const meetUp = require('./controllers/meetupController')
app.use('/homecoming/meetups', meetUp)


router.route("/user");

router.route("/city")
    .get(cityController.findAll());
router.route("/city/:cityId")
    .get(cityController.findOne());

router.route("/city:cityId/houses")
    .get(houseController.getAllHouse())
    .get(houseController.getOneHouse())
    .post(houseController.createHouse())
    .delete(houseController.deleteAHouse());




router.route("/meetups")


router.route("/events")
    .get(eventController.allEvents())
    .post(eventController.createEvent());

router.route("/events/:eventsId/delete")
    .delete(eventController.deleteEvent());



module.exports = router;
