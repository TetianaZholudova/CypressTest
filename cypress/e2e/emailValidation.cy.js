import registrationPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/RegistrationPage.js'
import registrationPageStepsEmailField from '../support/steps/registrationPageStepsEmailField.js'

describe('Email validation', () => {
    beforeEach(() => {
    
      cy.visit('/')
      cy.get('.hero-descriptor_btn').click()
  
    })

it('should show "Email required" when the email field is empty', ()=> {
    registrationPage.getSignupEmail().click();
    registrationPageStepsEmailField.leaveEmailFieldEmpty()
})
  
it('should show "Email is incorrect" when the username contains wrong data', ()=> {
    registrationPage.getSignupEmail().type('tanya.zhol.gmail.com');
    registrationPageStepsEmailField.enterIncorrectEmail()        
})
})
    