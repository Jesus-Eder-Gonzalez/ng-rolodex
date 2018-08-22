'use strict';

const express = require('express');
const router = express.Router();
const User = require('../../../models/User');

router.route('/').get((req, res) => {
  return User.where('id', req.query.user).fetch().then(response => {
    console.log(response);
    res.json({ message: response });
  });
});

//DEBUGGING / TESTING ROUTE NOT FOR PRODUCTION
router.route('/list').get((req, res) => {
  console.log('req', req.query);
  return new User().fetchAll({ withRelated: ['contacts'] }).then(response => {
    console.log(response);
    res.json({ message: response });
  });
});
module.exports = router;
