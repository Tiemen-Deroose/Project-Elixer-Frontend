describe('browse test', () => {
  beforeEach(() => {
    cy.login('user1@domain.com', 'pass1');
  });

  it('search on keyword & clear', () => {
    cy.get('[data-cy=search-input]').type('Sun');
    cy.get('[data-cy=search-button]').click();
    cy.get('[data-cy=art').should('have.length', 1);
    cy.get('[data-cy=jewelry').should('not.exist');

    cy.get('[data-cy=clear-button]').click();
    cy.get('[data-cy=art').should('have.length', 2);
    cy.get('[data-cy=jewelry').should('have.length', 2);
  });

  it('search on type', () => {
    cy.get('[data-cy=search-input]').type('jewelry');
    cy.get('[data-cy=search-button]').click();
    cy.get('[data-cy=art').should('not.exist');
    cy.get('[data-cy=jewelry').should('have.length', 2);
  });
});