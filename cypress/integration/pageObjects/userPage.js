var faker = require('faker');

class UserPage {

  visit() {
    cy.visit('https://automacaocombatista.herokuapp.com/users/new')
  }

  createUser() {
    var name = faker.name.firstName();
    var last_name = faker.name.lastName();
    var email = faker.internet.email();
    var address = faker.address.streetName();
    var university = faker.company.companyName();
    var profile = faker.name.jobArea();
    var age = faker.random.number(100);

    cy.get('#user_name').type(name);
    cy.get('#user_lastname').type(last_name);
    cy.get('#user_email').type(email);
    cy.get('#user_address').type(address);
    cy.get('#user_university').type(university);
    cy.get('#user_profile').type(profile);
    cy.get('#user_gender').type('male');
    cy.get('#user_age').type(age);
    cy.get('input[value="Criar"]').click();
  }
}

module.exports = new UserPage();