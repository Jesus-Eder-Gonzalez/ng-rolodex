exports.up = function(knex, Promise) {
  return knex.schema.createTable('contacts', table => {
    table
      .increments()
      .notNull()
      .unique();
    table.string('name', 255).notNull();
    table.string('address', 255).nullable();
    table.string('mobile', 255).nullable();
    table.string('work', 255).nullable();
    table.string('home', 255).nullable();
    table.string('email', 255).nullable();
    table.string('twiiter', 255).nullable();
    table.string('instagram', 255).nullable();
    table.string('github', 255).nullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contacts');
};
