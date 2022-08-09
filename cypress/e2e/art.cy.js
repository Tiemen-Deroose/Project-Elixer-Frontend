describe('art test', () => {
    it('create art', () => {
        cy.visit('http://localhost:3000/art/add');
    
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
        cy.get('[data-cy=art_title]').eq(2).contains('Painting');
        cy.get('[data-cy=art_image]').eq(2).should('be.visible');
        cy.get('[data-cy=art_price]').eq(2).contains('209.99');
        cy.get('[data-cy=art_material]').eq(2).contains('canvas');
        cy.get('[data-cy=art_medium]').eq(2).contains('paint');
        cy.get('[data-cy=art_size]').eq(2).contains('large');
    });

    it('edit created art', () => { 
        cy.get('[data-cy=art_edit_button]').eq(2).click();
        cy.get('[data-cy=art_edit_dialog]').should('be.visible');

        cy.get('[type=text]').each(($el) => cy.wrap($el).clear());

        cy.get('[data-cy=art_edit_title_input]').type('editedTitle');
        cy.get('[data-cy=art_edit_url_input]').type('http://localhost:3000/images/art/autumn_tree.jpg');
        cy.get('[data-cy=art_edit_price_input]').type('99.99');
        cy.get('[data-cy=art_edit_material_input]').type('editedMaterial');
        cy.get('[data-cy=art_edit_medium_input]').type('editedMedium');
        cy.get('[data-cy=art_edit_size_input]').type('editedSize');

        cy.get('[data-cy=art_edit_confirm_button]').click();
    });

    it('check edited art', () => {
        cy.get('[data-cy=art_title]').eq(2).contains('editedTitle');
        cy.get('[data-cy=art_image]').eq(2).should('be.visible');
        cy.get('[data-cy=art_price]').eq(2).contains('99.99');
        cy.get('[data-cy=art_material]').eq(2).contains('editedMaterial');
        cy.get('[data-cy=art_medium]').eq(2).contains('editedMedium');
        cy.get('[data-cy=art_size]').eq(2).contains('editedSize');
    });

    it('remove edited art', () => {
        cy.get('[data-cy=art_delete_button').eq(2).click();
        cy.get('[data-cy=art]').should('have.length', 2);
    })
})