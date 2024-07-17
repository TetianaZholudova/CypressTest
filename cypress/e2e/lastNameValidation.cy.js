import registrationPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/RegistrationPage.js' 
import registrationPageStepsLastNameField from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/steps/registrationPageStepsLastNameField.js' 


describe('LastName validation', () => {
    beforeEach(() => {
    
      cy.visit('/')
      cy.get('.hero-descriptor_btn').click()
  
    })

it('should show "Last name required" when the lastname field is empty', ()=> {
    registrationPage.getSignupLastName().click();
    registrationPageStepsLastNameField.leaveLastNameFieldEmpty()
})

it('should show "Last name has to be from 2 to 20 characters long" when the username contains 1 letter', ()=> {
    registrationPage.getSignupLastName().type('Z');
    registrationPageStepsLastNameField.incorrectLengthOfLastNameField()
    })

it('should show "Last name has to be from 2 to 20 characters long" when the lastname contains 21 letters', ()=> {
    registrationPage.getSignupLastName().type('ZholudovaZholudovaZholudovaZholudova');
    registrationPageStepsLastNameField.incorrectLengthOfLastNameField()
    })  

it('should show "Last name is invalid" when the username contains special characters', ()=> {
    registrationPage.getSignupLastName().type('Zhol^&*');
    registrationPageStepsLastNameField.enterIncorrectLastName()
        })

it('should show "Last name is invalid" when the username contains digits characters', ()=> {
    registrationPage.getSignupLastName().type('Zholudova123')
    registrationPageStepsLastNameField.enterIncorrectLastName()
            })
           
    })

    