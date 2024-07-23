import registrationPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/RegistrationPage.js'

const registrationPageStepsPasswordField = {

validatePasswordIsIncorrectMessage(){
    registrationPage.getErrorMessage().should('have.text', 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
    .and('have.css', 'color', 'rgb(220, 53, 69)', 'box-sizing', 'border-box')
        
}, 
validatePasswordIsRequiredMessage(){
    registrationPage.getErrorMessage().should('have.text', 'Password required')
    .and('have.css', 'color', 'rgb(220, 53, 69)', 'box-sizing', 'border-box')
}, 
validateReenterPasswordIsRequiredMessage(){
    registrationPage.getErrorMessage().should('have.text', 'Re-enter password required')
    .and('have.css', 'color', 'rgb(220, 53, 69)', 'box-sizing', 'border-box')
}
}

export default registrationPageStepsPasswordField;