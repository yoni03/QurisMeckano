it('Meckano', function() {
  cy.visit('https://app.meckano.co.il/login.php');
  cy.get('#email').type(Cypress.env('USER'));
  cy.get('#password').type(Cypress.env('PW'));
  cy.wait(500);
  cy.get('#submitButtons > .sl').click();
  cy.wait(1000);
  cy.get('#checkin-button').click();
});
