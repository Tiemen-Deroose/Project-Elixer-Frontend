describe('browse test', () => {
  beforeEach(() => {
    cy.login('user1@domain.com', 'pass1');
  });

  it('search on keyword & clear', () => {
    cy.get('[data-cy=search_input]').type('Sun');
    cy.get('[data-cy=search_button]').click();
    cy.get('[data-cy=art').should('have.length', 1);
    cy.get('[data-cy=jewelry').should('not.exist');

    cy.get('[data-cy=clear_button]').click();
    cy.get('[data-cy=art').should('have.length', 2);
    cy.get('[data-cy=jewelry').should('have.length', 2);
  });

  it('search on type', () => {
    cy.get('[data-cy=search_input]').type('jewelry');
    cy.get('[data-cy=search_button]').click();
    cy.get('[data-cy=art').should('not.exist');
    cy.get('[data-cy=jewelry').should('have.length', 2);
  });

  it('favourite', () => {
    cy.get('[data-cy=unfavourite_icon]').should('not.exist');
    cy.get('[data-cy=favourite_icon]').should('have.length', 4);

    cy.get('[data-cy=favourite_button]').eq(0).click();
    cy.get('[data-cy=unfavourite_icon]').should('have.length', 1);
    cy.get('[data-cy=favourite_icon]').should('have.length', 3);

    cy.get('[data-cy=favourite_button]').eq(0).click();
    cy.get('[data-cy=unfavourite_icon]').should('not.exist');
    cy.get('[data-cy=favourite_icon]').should('have.length', 4);
  });
});