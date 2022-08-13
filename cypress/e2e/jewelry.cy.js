describe('jewelry test', () => {
  beforeEach(() => {
    cy.login('user1@domain.com', 'pass1');
  });

  it('create jewelry', () => {
    cy.get('[data-cy=nav_jewelry]').click();
    cy.get('[data-cy=create_new_button]').click();

    cy.get('[data-cy=jewelry_name_input]').type('Silver bracelet');
    cy.get('[data-cy=jewelry_url_input]').type('http://localhost:3000/images/jewelry/skeletonized_petals_bracelet.jpg');
    cy.get('[data-cy=jewelry_price_input]').type('109.99');
    cy.get('[data-cy=jewelry_category_input]').type('bracelet');
    cy.get('[data-cy=jewelry_material_input]').type('sterling silver');
    cy.get('[data-cy=jewelry_colour_input]').type('silver');
    cy.get('[data-cy=jewelry_submit_button]').click();

    cy.get('[data-cy=jewelry]').should('have.length', 3);
  });

  it('check created jewelry', () => {
    cy.get('[data-cy=nav_jewelry]').click();

    cy.get('[data-cy=jewelry_name]').eq(2).contains('Silver bracelet');
    cy.get('[data-cy=jewelry_image]').eq(2).should('be.visible');
    cy.get('[data-cy=jewelry_price]').eq(2).contains('109.99');
    cy.get('[data-cy=jewelry_category]').eq(2).contains('bracelet');
    cy.get('[data-cy=jewelry_material]').eq(2).contains('sterling silver');
    cy.get('[data-cy=jewelry_colour]').eq(2).contains('silver');
  });

  it('edit created jewelry', () => {
    cy.get('[data-cy=nav_jewelry]').click();

    cy.get('[data-cy=jewelry_edit_button]').eq(2).click();
    cy.get('[data-cy=jewelry_edit_dialog]').should('be.visible');

    cy.get('[data-cy=jewelry_edit_name_input]').clear().type('editedName');
    cy.get('[data-cy=jewelry_edit_url_input]').clear().type('http://localhost:3000/images/jewelry/colour_changing_pendant.jpg');
    cy.get('[data-cy=jewelry_edit_price_input]').clear().type('159.99');
    cy.get('[data-cy=jewelry_edit_category_input]').clear().type('editedCategory');
    cy.get('[data-cy=jewelry_edit_material_input]').clear().type('editedMaterial');
    cy.get('[data-cy=jewelry_edit_colour_input]').clear().type('editedColour');

    cy.get('[data-cy=jewelry_edit_confirm_button]').click();
  });

  it('check edited jewelry', () => {
    cy.get('[data-cy=nav_jewelry]').click();

    cy.get('[data-cy=jewelry_name]').eq(2).contains('editedName');
    cy.get('[data-cy=jewelry_image]').eq(2).should('be.visible');
    cy.get('[data-cy=jewelry_price]').eq(2).contains('159.99');
    cy.get('[data-cy=jewelry_category]').eq(2).contains('editedCategory');
    cy.get('[data-cy=jewelry_material]').eq(2).contains('editedMaterial');
    cy.get('[data-cy=jewelry_colour]').eq(2).contains('editedColour');
  });

  it('remove edited jewelry', () => {
    cy.get('[data-cy=nav_jewelry]').click();

    cy.get('[data-cy=jewelry_delete_button]').eq(2).click();
    cy.get('[data-cy=jewelry]').should('have.length', 2);
  });
});