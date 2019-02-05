var faker = require('faker');

class UserPage {

  visit() {
    cy.visit('https://automacaocombatista.herokuapp.com/users/new')
  }

  createUser() {
    let name = faker.name.firstName();
    let last_name = faker.name.lastName();
    let email = faker.internet.email();
    let address = faker.address.streetName();
    let university = faker.company.companyName();
    let profile = faker.name.jobArea();
    let age = faker.random.number(100);

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