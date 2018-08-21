exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'admin' },
        { username: 'test' },
        {
          username: 'coolguy',
          name: 'Joe Camel',
          email: 'coolguy@gmail.com',
          address: '111 abc lane, Honolulu, HI 96800'
        },
        {
          username: 'badlady',
          name: 'Cardi B',
          email: 'badlady@gmail.com',
          address: '123 mosdef lane, Honolulu, HI 96800'
        },
        {
          username: 'normalguy',
          name: 'John Smith',
          email: 'normalguy@gmail.com',
          address: '123 abc lane, Honolulu, HI 96800'
        },
        {
          username: 'guy',
          name: 'Frederick Douglas',
          email: 'notnormalguy@gmail.com',
          address: '123 def lane, Honolulu, HI 96800'
        },
        {
          username: 'normalgal',
          name: 'Jane Smith',
          email: 'normalgal@gmail.com',
          address: '123 def lane, Honolulu, HI 96800'
        }
      ]);
    });
};
