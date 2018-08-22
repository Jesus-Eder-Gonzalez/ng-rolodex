const express = require('express');
const router = express.Router();

const userIndex = require('./api/users/');
const contactIndex = require('./api/contacts/');

router.use('/profile', userIndex);
router.use('/contacts', contactIndex);

module.exports = router;
