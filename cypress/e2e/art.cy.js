describe('art test', () => {
  beforeEach(() => {
    cy.login('user1@domain.com', 'pass1');
  });

  it('create art', () => {
    cy.get('[data-cy=nav_art]').click();
    cy.get('[data-cy=create_new_button]').click();

    cy.get('[data-cy=art_title_input]').type('Painting');
    cy.get('[data-cy=art_url_input]').type('http://localhost:3000/images/art/sunlight.jpg');
    cy.get('[data-cy=art_price_input]').type('209.99');
    cy.get('[data-cy=art_material_input]').type('canvas');
    cy.get('[data-cy=art_medium_input]').type('paint');
    cy.get('[data-cy=art_size_input]').type('large');
    cy.get('[data-cy=art_submit_button]').click();

    cy.get('[data-cy=art]').should('have.length', 3);
  });

  it('check created art', () => {
    cy.get('[data-cy=nav_art]').click();
    
    cy.get('[data-cy=art_title]').eq(2).contains('Painting');
    cy.get('[data-cy=art_image]').eq(2).should('be.visible');
    cy.get('[data-cy=art_price]').eq(2).contains('209.99');
    cy.get('[data-cy=art_material]').eq(2).contains('canvas');
    cy.get('[data-cy=art_medium]').eq(2).contains('paint');
    cy.get('[data-cy=art_size]').eq(2).contains('large');
  });

  it('edit created art', () => {
    cy.get('[data-cy=nav_art]').click();

    cy.get('[data-cy=art_edit_button]').eq(2).click();
    cy.get('[data-cy=art_edit_dialog]').should('be.visible');

    cy.get('[data-cy=art_edit_title_input]').clear().type('editedTitle');
    cy.get('[data-cy=art_edit_url_input]').clear().type('http://localhost:3000/images/art/autumn_tree.jpg');
    cy.get('[data-cy=art_edit_price_input]').clear().type('99.99');
    cy.get('[data-cy=art_edit_material_input]').clear().type('editedMaterial');
    cy.get('[data-cy=art_edit_medium_input]').clear().type('editedMedium');
    cy.get('[data-cy=art_edit_size_input]').clear().type('editedSize');

    cy.get('[data-cy=art_edit_confirm_button]').click();
  });

  it('check edited art', () => {
    cy.get('[data-cy=nav_art]').click();

    cy.get('[data-cy=art_title]').eq(2).contains('editedTitle');
    cy.get('[data-cy=art_image]').eq(2).should('be.visible');
    cy.get('[data-cy=art_price]').eq(2).contains('99.99');
    cy.get('[data-cy=art_material]').eq(2).contains('editedMaterial');
    cy.get('[data-cy=art_medium]').eq(2).contains('editedMedium');
    cy.get('[data-cy=art_size]').eq(2).contains('editedSize');
  });

  it('remove edited art', () => {
    cy.get('[data-cy=nav_art]').click();

    cy.get('[data-cy=art_delete_button').eq(2).click();
    cy.get('[data-cy=art]').should('have.length', 2);
  });
});