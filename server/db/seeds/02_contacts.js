exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('contacts').insert([
        {
          name: 'John Doe',
          address: '123 abc street, Honolulu, HI 96811',
          mobile: '(555) 555-5555',
          work: '(555) 555-5555',
          email: 'johnd@gmail.com',
          twitter: 'johnd',
          instagram: 'johnd3',
          github: 'johnd'
        },
        {
          name: 'Jan Doe',
          address: '123 abc street, Honolulu, HI 96811',
          mobile: '(555) 555-5555',
          work: '(555) 555-5555',
          email: 'jand@gmail.com',
          twitter: 'jand',
          instagram: 'jand3',
          github: 'jand'
        },
        {
          name: 'Albert Asimov',
          address: '123 abc street, Honolulu, HI 96811',
          mobile: '(555) 555-5555',
          work: '(555) 555-5555',
          email: 'alas@gmail.com',
          twitter: 'alas',
          instagram: 'alas',
          github: 'alas'
        },
        {
          name: 'Beatriz Baker',
          address: '123 abc street, Honolulu, HI 96811',
          mobile: '(555) 555-5555',
          work: '(555) 555-5555',
          email: 'beabaker@gmail.com',
          twitter: 'beabaker',
          instagram: 'beabaker',
          github: 'bbaker'
        },
        {
          name: 'Zelda Zimmerman',
          address: '123 abc street, Honolulu, HI 96811',
          mobile: '(555) 555-5555',
          work: '(555) 555-5555',
          email: 'zzman@gmail.com',
          twitter: 'zzman',
          instagram: 'zzman',
          github: 'zzman'
        },
      ]);
    });
};
