it('Meckano', function() {
  cy.visit('https://app.meckano.co.il/login.php');
  cy.get('#email').type('yoni@quris.ai');
  cy.get('#password').type('zu9asy4u');
  cy.wait(500);
  cy.get('#submitButtons > .sl').click();
  cy.wait(1000);
  cy.get('#checkin-button').click();
});
