'use strict';

const bookshelf = require('./bookshelf');

class Contact extends bookshelf.Model {
  get tableName() {
    return 'contacts';
  }
  get hasTimestamps() {
    return true;
  }

  user() {
    return this.hasOne('User', 'username','created_by');
  }

}

module.exports = bookshelf.model('Contact', Contact);
