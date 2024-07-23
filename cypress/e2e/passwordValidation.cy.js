import registrationPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/RegistrationPage.js' 
import registrationPageStepsPasswordField from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/steps/registrationPageStepsPasswordField.js' 
import registrationPageStepsEmailField from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/steps/registrationPageStepsEmailField.js'

describe('Password validation', () => {
    beforeEach(() => {
    
      cy.visit('/')
      cy.get('.hero-descriptor_btn').click()
  
    })

it('should show "Password required" when password field is empty', ()=> {
    
    registrationPage.getSignupPassword().focus().blur();
    registrationPageStepsEmailField.verifyRegistrationButtonIsDisabled();
    registrationPageStepsPasswordField.validatePasswordIsRequiredMessage()
})

it('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when password field contains 7 characters', ()=> {
    registrationPage.getSignupPassword().type('8Aatest');
    registrationPage.getRegisterButton().click({force: true});
    registrationPageStepsPasswordField.validatePasswordIsIncorrectMessage()
 })

it('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when password field contains 16 characters', ()=> {
   
    registrationPage.getSignupPassword().type('8Aatest8Aatest78');
    registrationPage.getRegisterButton().click({force: true});
    registrationPageStepsPasswordField.validatePasswordIsIncorrectMessage()
})  

it('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when password field does not contain 1 capital letter', ()=> {
   
    registrationPage.getSignupPassword().type('8aatest8aatest7');
    registrationPage.getRegisterButton().click({force: true});
    registrationPageStepsPasswordField.validatePasswordIsIncorrectMessage()
})  
                
it('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when password field does not contain 1 small letter', ()=> {
   
    registrationPage.getSignupPassword().type('8AATEST8AATEST7');
    registrationPage.getRegisterButton().click({force: true});
    registrationPageStepsPasswordField.validatePasswordIsIncorrectMessage()
})

it('should show "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter" when password field does not contain 1 interger', ()=> {
   
    registrationPage.getSignupPassword().type('AATESTnjTEST');
    registrationPage.getRegisterButton().click({force: true});
    registrationPageStepsPasswordField.validatePasswordIsIncorrectMessage()
})

})

    