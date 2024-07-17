import registrationPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/RegistrationPage.js' 
import { registrationData } from '/Users/tetianazholudova/Documents/CypressTest/cypress/fixtures/registrationData.js'

describe('Register button validation', () => {

it('Verify if register button is enabled if all data is correct', ()=> {
  cy.visit('/')
  
  registrationPage.getSignUpButton().click()
  registrationPage.getSignupName().type('   Lara  '.trim());
  registrationPage.getSignupLastName().type('  Jean   '.trim());
  registrationPage.getSignupEmail().type(registrationData.userEmail);
  registrationPage.getSignupPassword().type(registrationData.userPassword);
  registrationPage.getSignupRepeatPassword().type(registrationData.userRepeatPassword);
  registrationPage.getRegisterButton().should('be.visible').and('be.enabled')

  
})

})
