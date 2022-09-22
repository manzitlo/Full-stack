const express = require('express');
const router = express.Router();
const UserTest = require('../models/userTest');

router.get('/meetfood', async (req, res) => {
  // Create a user
const user = new UserTest({
  firstName: 'Max',
  userName: 'Max',
});

// Save to the database
      await       user.save();

// Search a user
// const foundUser = await User.findOne({ firstName: 'Max' });
  res.send('Meetfood class');
});

module.exports = router;
