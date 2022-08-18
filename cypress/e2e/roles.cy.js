describe('jewelry test', () => {
  it('admin has access to all', () => {
    cy.login('user1@domain.com', 'pass1');

    cy.get('[data-cy=art_edit_button]').should('exist');
    cy.get('[data-cy=art_delete_button]').should('exist');
    cy.get('[data-cy=jewelry_edit_button]').should('exist');
    cy.get('[data-cy=jewelry_delete_button]').should('exist');

    cy.get('[data-cy=nav_art]').click();
    cy.get('[data-cy=create_new_button]').click();
    cy.url().should('include', '/art/add');

    cy.get('[data-cy=nav_jewelry]').click();
    cy.get('[data-cy=create_new_button]').click();
    cy.url().should('include', '/jewelry/add');
  });

  it('user has no access to create/edit/delete', () => {
    cy.login('user2@domain.com', 'pass2');

    cy.get('[data-cy=art_edit_button]').should('not.exist');
    cy.get('[data-cy=art_delete_button]').should('not.exist');
    cy.get('[data-cy=jewelry_edit_button]').should('not.exist');
    cy.get('[data-cy=jewelry_delete_button]').should('not.exist');

    cy.get('[data-cy=nav_art]').click();
    cy.get('[data-cy=create_new_button]').should('not.exist');
    cy.get('[data-cy=nav_jewelry]').click();
    cy.get('[data-cy=create_new_button]').should('not.exist');

    cy.visit('http://localhost:3000/frontendweb-thomas-2122-tiemenderoose/art/add');
    cy.url().should('not.include', '/art/add');
    cy.visit('http://localhost:3000/frontendweb-thomas-2122-tiemenderoose/jewelry/add');
    cy.url().should('not.include', '/jewelry/add');
  });
});