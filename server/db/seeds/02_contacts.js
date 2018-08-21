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
          github: 'johnd',
          created_by: 'test'
        },
        {
          name: 'Jan Doe',
          address: '123 abc street, Honolulu, HI 96811',
          mobile: '(555) 555-5555',
          work: '(555) 555-5555',
          email: 'jand@gmail.com',
          twitter: 'jand',
          instagram: 'jand3',
          github: 'jand',
          created_by: 'test'
        },
        {
          name: 'Albert Asimov',
          address: '123 abc street, Honolulu, HI 96811',
          mobile: '(555) 555-5555',
          work: '(555) 555-5555',
          email: 'alas@gmail.com',
          twitter: 'alas',
          instagram: 'alas',
          github: 'alas',
          created_by: 'test'
        },
        {
          name: 'Beatriz Baker',
          address: '123 abc street, Honolulu, HI 96811',
          mobile: '(555) 555-5555',
          work: '(555) 555-5555',
          email: 'beabaker@gmail.com',
          twitter: 'beabaker',
          instagram: 'beabaker',
          github: 'bbaker',
          created_by: 'test'
        },
        {
          name: 'Zelda Zimmerman',
          address: '123 abc street, Honolulu, HI 96811',
          mobile: '(555) 555-5555',
          work: '(555) 555-5555',
          email: 'zzman@gmail.com',
          twitter: 'zzman',
          instagram: 'zzman',
          github: 'zzman',
          created_by: 'test'
        }
      ]);
    });
};
