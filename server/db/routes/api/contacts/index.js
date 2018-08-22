'use strict';

const express = require('express');
const router = express.Router();
const User = require('../../../models/User');
const Contact = require('../../../models/Contact');

router.route('/search/:term').get((req, res) => {
  return Contact.where('name', 'ilike', `%${req.params.term}%`)
    .where('created_by', req.query.user)
    .fetchAll()
    .then(response => {
      res.json(response);
    });
  // return User.where({ id: req.query.user })
  //   .fetch({ withRelated: ['contacts.name', 'like', `%${req.params.term}%`] })
  //   .then(response => {
  //     console.log('req', req.query, req.params);
  //     res.json({ message: response });
  //   });
});

router.route('/').get((req, res) => {
  return User.where('id', req.query.user)
    .fetch({ withRelated: ['contacts'] })
    .then(response => {
      console.log(response);
      res.json({ message: response });
    });
});

//DEBUGGING / TESTING ROUTE NOT FOR PRODUCTION
router.route('/list').get((req, res) => {
  console.log('req', req.query);
  return Contact.fetchAll({ withRelated: ['user'] }).then(response => {
    console.log(response);
    res.json({ message: response });
  });
});
////////////////////////////////////////////////

router.route('/:id').get((req, res) => {
  return Contact.where({ id: req.params.id })
    .fetch()
    .then(response => {
      console.log(response);
      res.json({ message: response });
    });
});
module.exports = router;
