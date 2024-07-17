import registrationPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/RegistrationPage.js'

const registrationPageStepsNameField = {

enterIncorrectName(){
    cy.get('.modal-footer > .btn').click({force: true})
    cy.get('.invalid-feedback > p').should('have.text', 'Name is invalid')
    .and('have.css', 'color', 'rgb(220, 53, 69)', 'box-sizing', 'border-box') 
        
}, 
leaveNameFieldEmpty(){
    cy.get('.modal-footer > .btn').click({force: true})
    cy.get('.invalid-feedback > p').should('have.text', 'Name required')
    .and('have.css', 'color', 'rgb(220, 53, 69)', 'box-sizing', 'border-box')
}, 

incorrectLengthOfNameField(){
    cy.get('.modal-footer > .btn').click({force: true})
    cy.get('.invalid-feedback > p').should('have.text', 'Name has to be from 2 to 20 characters long')
    .and('have.css', 'color', 'rgb(220, 53, 69)', 'box-sizing', 'border-box')
}
}
export default registrationPageStepsNameField;