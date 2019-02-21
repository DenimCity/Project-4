// const express = require('express')
const Event = require('../db/models/Event');
// const router = express.Router({mergeParams: true})


module.exports = {
    allEvents: async (req, res) => {
        await Event.find({})
            .then( events => res.json(events))
            .catch(err => res.status(422).json(err))

    },
    createEvent: async (req, res) => {
        await Event.create(req.body)
            .then( newEvent => res.json(newEvent))
            .catch(err => res.status(422).json(err))
    },
    deleteEvent: async (req, res) => {
        await Event.findByIdAndRemove(request.params.eventsId)
            .then(event => res.json(event))
            .catch(err => res.status(422).json(err))

    }


}
