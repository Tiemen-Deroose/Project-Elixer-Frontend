Cypress.Commands.add('login', (email, password) => {
  cy.intercept('/api/users/login').as('login');
  cy.visit('http://localhost:3000/frontendweb-thomas-2122-tiemenderoose/login');
  cy.get('[data-cy=login_email_input]').type(email);
  cy.get('[data-cy=login_password_input]').type(password);
  cy.get('[data-cy=login_submit_button]').click();
  cy.wait('@login');
});