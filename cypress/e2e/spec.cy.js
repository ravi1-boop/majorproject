describe('Travel Insurance Test Suite', () => {
  it('Should load the makemytrip homepage successfully', () => {
  cy.on('uncaught:exception',(err,runnable)=>{
    return false;
  })

    cy.visit('https://www.godigit.com/')
    cy.url().should('equal','https://www.godigit.com/')
  })
});
