const Event = require('../models/event.model')

const EventController = {
    //C
    create: (req, res) => {
        Event
            .create(req.body)
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(400).json({ msg: 'Error encountered when creating event', error: err })
            })
    },

    //R
    getAll: (req, res) => {
        Event
            .find({})
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({ msg: 'Error encountered when gathering All Events', error: err })
            })
    },
    getOne: (req, res) => {
        Event
            .findOne({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({ msg: 'Error encountered when gathering One Event', error: err })
            })
    },

    //U
    update: (req, res) => {
        Event
            .findOneAndUpdate({ _id: req.params.id }, req.body, ({ new: true, runValidators: true }))
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({ msg: 'Error encountered while trying to update Event', error: err })
            })
    },

    //D
    delete: (req, res) => {
        Event
            .findOneAndDelete({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({ msg: 'Error while deleting event.', error: err })
            })
    }
}

module.exports = EventController