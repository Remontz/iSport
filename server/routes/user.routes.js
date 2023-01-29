const UserController = require('../controllers/user.controller')
const { authenticate } = require('../config/jwt.config')

const routes = (app) => {
    app.post('/api/register', UserController.register)
    app.post('/api/login', UserController.login)

    app.get('/api/users', authenticate, UserController.getAll)
    //C
    app.post('/api/users', UserController.create)
    //R
    app.get('/api/users', UserController.getAll)
    app.get('/api/users/:id', UserController.getOne)
    //U
    app.put('/api/users/:id', UserController.update)
    //D
    app.delete('/api/users/:id', UserController.delete)
}

module.exports = routes