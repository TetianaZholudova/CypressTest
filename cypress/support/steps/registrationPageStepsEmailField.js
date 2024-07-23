import registrationPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/RegistrationPage.js'

const registrationPageStepsEmailField = {

verifyRegistrationButtonIsDisabled(){
    registrationPage.getRegisterButton().should('be.disabled');
        
}, 

validateEmailIsRequeredMessage(){
    registrationPage.getErrorMessage().should('have.text', 'Email required')
    .and('have.css', 'color', 'rgb(220, 53, 69)', 'box-sizing', 'border-box')
},

validateEmailIsIncorrectMessage(){
    registrationPage.getErrorMessage().should('have.text', 'Email is incorrect')
    .and('have.css', 'color', 'rgb(220, 53, 69)', 'box-sizing', 'border-box')
},


}
export default registrationPageStepsEmailField; 