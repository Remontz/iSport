const EventController = require('../controllers/event.controller')

const routes = (app) => {
    //C
    app.post('/api/events', EventController.create)
    //R
    app.get('/api/events', EventController.getAll)
    app.get('/api/events/:id', EventController.getOne)
    //U
    app.put('/api/events/:id', EventController.update)
    //D
    app.delete('/api/events/:id', EventController.delete)
}

module.exports = routes