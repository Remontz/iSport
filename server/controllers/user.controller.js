const User = require('../models/user.model')

const UserController = {
    register: (req, res) => {
        User.create(req.body)
            .then(user => {
                res.json({ msg: "success!", user: user })
            })
            .catch(err => res.json(err))
    }
}