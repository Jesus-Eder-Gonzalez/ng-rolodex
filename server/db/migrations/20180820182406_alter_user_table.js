exports.up = function(knex, Promise) {
  return knex.schema.alterTable('contacts', table => {
    table.renameColumn('twiiter', 'twitter');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable('contacts', table => {
    table.renameColumn('twitter', 'twiiter');
  });
};
