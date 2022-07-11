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

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;