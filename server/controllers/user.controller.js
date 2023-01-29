const User = require('../models/user.model')

const UserController = {
    register: (req, res) => {
        User
            .create(req.body)
            .then(user => {
                const userToken = jwt.sign({
                    id: user._id
                }, process.env.SECRET_KEY)

                res
                    .cookie('usertoken', userToken, {
                        httpOnly: true
                    })
                    .json({ msg: 'success!', user: user })
            })
            .catch(err => res.json(err))
    },

    login: async (req, res) => {
        const user = await User.findOne({ email: req.body.email })

        if (user === null) {
            return res.sendStatus(400)
        }

        const correctPassword = await bcrypt.compare(req.body.password, user.password)

        if (!correctPassword) {
            return res.sendStatus(400)
        }

        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY)

        res
            .cookie("usertoken", userToken, {
                httpOnly: true
            })
            .json({ msg: 'success!' })
    },
    logout: (req, res) => {
        res.clearCookie('userToken')
        res.sendStatus(200)
    },

    //Create
    create: (req, res) => {
        User
            .create(req.body)
            .then((result) => {
                res.status(201).json(result)
            })
            .catch((err) => {
                res.status(400).json({ msg: 'Error', error: err })
            })
    },

    //Read
    getAll: (req, res) => {
        User
            .find({})
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({ msg: 'Error', error: err })
            })
    },
    getOne: (req, res) => {
        User
            .findOne({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({ msg: 'Error', error: err })
            })
    },

    //Update
    update: (req, res) => {
        User
            .findOneAndUpdate({ _id: req.params.id }, req.body, ({ new: true, runValidators: true }))
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({ msg: 'Error', error: err })
            })
    },

    //Delete
    delete: (req, res) => {
        User
            .findOneAndDelete({ _id: req.params.id })
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(404).json({ msg: 'Error', error: err })
            })
    }
}

module.exports = UserController