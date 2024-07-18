import registrationPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/RegistrationPage.js'

const registrationPageStepsLastNameField = {

validateLastNameIsIncorrectMessage(){
    registrationPage.getErrorMessage().should('have.text', 'Last name is invalid')
    .and('have.css', 'color', 'rgb(220, 53, 69)', 'box-sizing', 'border-box')   
        
}, 
validateLastNameIsRequeredMessage(){
    registrationPage.getErrorMessage().should('have.text', 'Last name required')
    .and('have.css', 'color', 'rgb(220, 53, 69)', 'box-sizing', 'border-box')
}, 

validateLastNameIsIncorrectLengthMessage(){
    registrationPage.getErrorMessage().should('have.text', 'Last name has to be from 2 to 20 characters long')
    .and('have.css', 'color', 'rgb(220, 53, 69)', 'box-sizing', 'border-box')
}
}
export default registrationPageStepsLastNameField;