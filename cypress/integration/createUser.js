const UserPage = require("../integration/pageObjects/userPage.js");

describe('Create user', function () {
    before(function() {
        Cypress.on('uncaught:exception', (err, runnable) => { return false })
      });

  it('with success', function () {
    UserPage.visit();
    UserPage.createUser()

    cy.get('#notice').then(el => {
     expect(el.text()).to.eq('Usuário Criado com sucesso')
    })

  })
})
