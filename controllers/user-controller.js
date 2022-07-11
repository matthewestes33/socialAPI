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
    // GET user by id and populate thought and friend data
    getSingleUser(req, res) {
        // specifies the route parameter
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
    // POST a new user
    createUser(req, res) {
        // creates accessible property to put into JSON format
        User.create(req.body)
            .then((dbUserData) => {
                res.json(dbUserData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // PUT to update user by id
    updateUser(req, res) {
        User.findOneAndUpdate(
            // specifies the route parameter
            { _id: req.params.userId },
            // updates the body data
            { $set: req.body, },
            {
                // validation of new object against schema turned on
                runValidators: true,
                // returns new, updated document (instead of original document before update)
                new: true,
            }
        )
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
    // DELETE to remove user by id
    deleteUser(req, res) {
        // specifies the route parameter
        User.findOneAndDelete({ _id: req.params.userId })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'No user with this id.' });
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // POST to add a new friend to a user's friend list
    addFriend(req, res) {
        User.findOneAndUpdate(
            // specifies the route parameter
            { _id: req.params.userId },
            // adds friend unless friend is already present
            { $addToSet: { friends: req.params.friendId } },
            // returns new, updated document (instead of original document before update) 
            { new: true })
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
    // DELETE to remove a friend from a user's friend list
    removeFriend(req, res) {
        User.findOneAndUpdate(
            // specifies the route parameter
            { _id: req.params.userId },
            // pull the created friend's id by the associated user's friends array field
            { $pull: { friends: req.params.friendId } },
            // returns new, updated document (instead of original document before update)  
            { new: true })
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

module.exports = userController;