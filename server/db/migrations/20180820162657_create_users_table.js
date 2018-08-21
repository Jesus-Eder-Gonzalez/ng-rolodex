'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table
      .increments()
      .notNull()
      .unique();
    table
      .string('username', 255)
      .notNull()
      .unique();
    table.string('name', 255).nullable();
    table.string('email', 255).nullable();
    table.string('address', 255).nullable();
    table.timestamps(true, true);
  });
};
exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
