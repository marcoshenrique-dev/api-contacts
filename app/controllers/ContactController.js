const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  show() {
    // Listar UM registro
  }

  store() {
    // criar um registro
  }

  update() {
    // Atualizar um registro
  }

  delete() {
    // deletar um registro
  }
}

module.exports = new ContactController();
