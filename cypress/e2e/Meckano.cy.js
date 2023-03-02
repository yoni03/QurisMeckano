/* ==== Test Created with Cypress Studio ==== */
it('Meckano', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://app.meckano.co.il/login.php');
  cy.get('#email').type('yoni@quris.ai');
  cy.get('#password').type('zu9asy4u');
  cy.wait(500);
  cy.get('#submitButtons > .sl').click();
  cy.wait(500);
  cy.get('#checkin-button').click();
  cy.wait(1000);
  cy.get('.select2-selection__rendered').last().click();
  cy.get('li.select2-results__option').first().click();
  cy.get('.btn-rounded-blue').click();
    /* ==== End Cypress Studio ==== */
});