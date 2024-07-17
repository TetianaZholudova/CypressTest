import registrationPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/RegistrationPage.js'

const registrationPageStepsEmailField = {

enterIncorrectEmail(){
    registrationPage.getRegisterButton().click({force: true})
    registrationPage.getErrorMessage().should('have.text', 'Email is incorrect')
    .and('have.css', 'color', 'rgb(220, 53, 69)', 'box-sizing', 'border-box')   
        
}, 

leaveEmailFieldEmpty(){
    registrationPage.getRegisterButton().click({force: true})
    registrationPage.getErrorMessage().should('have.text', 'Email required')
    .and('have.css', 'color', 'rgb(220, 53, 69)', 'box-sizing', 'border-box')
} 

}
export default registrationPageStepsEmailField; 