const router = require('express').Router();

// WHEN I open API GET routes in Insomnia for users
// THEN the data for each of these routes is displayed in a formatted JSON
// WHEN I test API POST, PUT, and DELETE routes in Insomnia
// THEN I am able to successfully create, update, and delete users in my database
// WHEN I test API POST and DELETE routes in Insomnia
// THEN I am able to successfully add and remove friends to a user’s friend list
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/user-controller');

// GET all users and POST a new user
router.route('/').get(getUsers).post(createUser);

// GET a single user by id, PUT to update a user by id, DELETE to remove user by id
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// POST to add new friend to user's friend list, DELETE to remove friend from user's list
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;