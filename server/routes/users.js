const express = require('express');
const router = express.Router();

const users = ['Bob', 'Alex', 'Will', 'Tristan'];

/* GET users listing. */
router.get('/', (req, res) => {
  return res.json(users);
});

module.exports = router;
