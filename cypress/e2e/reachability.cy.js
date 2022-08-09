describe('application route reachability test', () => {
	it('website is reachable', () => {
		cy.visit('http://localhost:3000');
	});

	it('routes are reachable', () => {
		cy.visit('http://localhost:3000/art');
		cy.visit('http://localhost:3000/art/add');
		cy.visit('http://localhost:3000/jewelry');
		cy.visit('http://localhost:3000/jewelry/add');
	})
});