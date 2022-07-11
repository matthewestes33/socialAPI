const router = require('express').Router();

// WHEN I open API GET routes in Insomnia for thoughts
// THEN the data for each of these routes is displayed in a formatted JSON
// WHEN I test API POST, PUT, and DELETE routes in Insomnia
// THEN I am able to successfully create, update, and delete thoughts in my database
// WHEN I test API POST and DELETE routes in Insomnia
// THEN I am able to successfully add and remove reactions to thoughts
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');


// GET all thoughts and POST a new thought
router.route('/').get(getThoughts).post(createThought);

// GET a single thought by id, PUT to update a thought by id, DELETE to remove a thought by id
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// POST to create a reaction stored in single thought's reactions array field 
router.route('/:thoughtId/reactions').post(addReaction);

// DELETE to pull and remove a reaction by reactionId 
router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;