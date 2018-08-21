exports.up = function(knex, Promise) {
  return knex.schema.alterTable('contacts', table => {
    table.string('created_by').notNull();
    table.foreign('created_by').references('username');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('contacts', table => {
    table.dropColumn('created_by');
  });
};
