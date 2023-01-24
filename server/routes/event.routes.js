const EventController = require('../controllers/event.controller')

const routes = (app) => {
    //C
    app.post('/api/event', EventController.create)
    //R
    app.get('/api/event', EventController.getAll)
    app.get('/api/event/:id', EventController.getOne)
    //U
    app.put('/api/event/:id', EventController.update)
    //D
    app.delete('/api/event/:id', EventController.delete)
}

module.exports = routes