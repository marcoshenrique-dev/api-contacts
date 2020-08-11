const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Mateus',
    email: 'mateus@mail.com',
    phone: '1212121212',
    category_id: uuid(),
  },
];

// UUID -> UNIVERSAL UNIQUE ID

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
