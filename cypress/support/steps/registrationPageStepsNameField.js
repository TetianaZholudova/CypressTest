import registrationPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/RegistrationPage.js'

const registrationPageStepsNameField = {

validateNameIsIncorrecMesssage(){
    registrationPage.getErrorMessage().should('have.text', 'Name is invalid')
    .and('have.css', 'color', 'rgb(220, 53, 69)', 'box-sizing', 'border-box') 
        
}, 
validateNameIsRequeredMessage(){
    registrationPage.getErrorMessage().should('have.text', 'Name required')
    .and('have.css', 'color', 'rgb(220, 53, 69)', 'box-sizing', 'border-box')
}, 

validateNameIsIncorrectLengthMessage(){
    registrationPage.getErrorMessage().should('have.text', 'Name has to be from 2 to 20 characters long')
    .and('have.css', 'color', 'rgb(220, 53, 69)', 'box-sizing', 'border-box')
}
}
export default registrationPageStepsNameField;