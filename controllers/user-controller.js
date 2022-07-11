const { User, Thought } = require('../models');

const userController = {
    // GET all users
    getUsers(req, res) {
        User.find()
            // hides the versionKey from queries
            .select('-__v')
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // GET user by id
    getSingleUser(req, res) {
        // specify the route parameter
        User.findOne({ _id: req.params.userId })
            // hides the versionKey from queries
            .select('-__v')
            .populate('friends')
            .populate('thoughts')
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'No user with this id.' });
                }
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
};