import registrationPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/RegistrationPage.js' 
import registrationPageStepsPasswordField from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/steps/registrationPageStepsPasswordField.js'
import registrationPageStepsEmailField from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/steps/registrationPageStepsEmailField.js'


describe('Reenter password validation', () => {
    beforeEach(() => {
    
      cy.visit('/')
      cy.get('.hero-descriptor_btn').click()
  
    })

it('should show "Re-enter password required" when re-enter password field is empty', ()=> {
    
    registrationPage.getSignupRepeatPassword().focus().blur();
    registrationPageStepsEmailField.verifyRegistrationButtonIsDisabled();
    registrationPageStepsPasswordField.validateReenterPasswordIsRequiredMessage()
})

it('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when re-enter password field contains 7 characters', ()=> {
   
    registrationPage.getSignupRepeatPassword().type('8Aatest');
    registrationPage.getRegisterButton().click({force: true});
    registrationPageStepsPasswordField.validatePasswordIsIncorrectMessage()
})

it('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when re-enter password field contains 16 characters', ()=> {
   
    registrationPage.getSignupRepeatPassword().type('8Aatest8Aatest78');
    registrationPage.getRegisterButton().click({force: true});
    registrationPageStepsPasswordField.validatePasswordIsIncorrectMessage()
})  

it('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when re-enter field does not contain 1 capital letter', ()=> {
   
    registrationPage.getSignupRepeatPassword().type('8aatest8aatest7');
    registrationPage.getRegisterButton().click({force: true});
    registrationPageStepsPasswordField.validatePasswordIsIncorrectMessage()
})  
                
it('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when re-enter password field does not contain 1 small letter', ()=> {
   
    registrationPage.getSignupRepeatPassword().type('8AATEST8AATEST7');
    registrationPage.getRegisterButton().click({force: true});
    registrationPageStepsPasswordField.validatePasswordIsIncorrectMessage()
})

it('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when re-enter password field does not contain 1 interger', ()=> {
   
    registrationPage.getSignupRepeatPassword().type('AATESTnjTEST');
    registrationPage.getRegisterButton().click({force: true});
    registrationPageStepsPasswordField.validatePasswordIsIncorrectMessage()
})

})