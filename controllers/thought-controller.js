const { Thought, User } = require('../models');

const thoughtController = {
    // GET all thoughts
    getThoughts(req, res) {
        Thought.find()
            // sort in descending order 
            .sort({ createdAt: -1 })
            .then((dbThoughtData) => {
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // GET thought by id
    getSingleThought(req, res) {
        // specifies the route parameter
        Thought.findOne({ _id: req.params.thoughtId })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'No thought with this id.' });
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // POST to create a new thought 
    createThought(req, res) {
        Thought.create(req.body)
            .then((dbThoughtData) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    // push the created thought's id to the associated user's thoughts array field
                    { $push: { thoughts: dbThoughtData._id } },
                    // returns new, updated document (instead of original document before update)
                    { new: true }
                );
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'Thought created but no user with this id.' });
                }

                res.json({ message: 'Thought created.' });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // PUT to update a thought by its id
    updateThought(req, res) {
        Thought.findOneAndUpdate(
            // specifies the route parameter
            { _id: req.params.thoughtId }, 
            { $set: req.body }, 
            { runValidators: true, 
            // returns new, updated document (instead of original document before update)    
            new: true })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'No thought with this id.' });
                }
                res.json(dbThoughtData);
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },
    // DELETE to remove a thought by its id
    deleteThought(req, res) {
        // specifies the route parameter
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
            .then((dbThoughtData) => {
                if (!dbThoughtData) {
                    return res.status(404).json({ message: 'No thought with this id!' });
                }

                // remove thought id from user's `thoughts` field
                return User.findOneAndUpdate(
                    { thoughts: req.params.thoughtId },
                    // pull the created thought's id by the associated user's thoughts array field
                    { $pull: { thoughts: req.params.thoughtId } },
                    // returns new, updated document (instead of original document before update)
                    { new: true }
                );
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res.status(404).json({ message: 'Thought created but no user with this id!' });
                }
                res.json({ message: 'Thought successfully deleted!' });
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json(err);
            });
    },

};