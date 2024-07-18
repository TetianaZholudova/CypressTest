import registrationPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/RegistrationPage.js' 
import registrationPageStepsLastNameField from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/steps/registrationPageStepsLastNameField.js' 
import registrationPageStepsEmailField from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/steps/registrationPageStepsEmailField.js'

describe('LastName validation', () => {
    beforeEach(() => {
    
      cy.visit('/')
      cy.get('.hero-descriptor_btn').click()
  
    })

it('should show "Last name required" when the lastname field is empty', ()=> {
    registrationPage.getSignupLastName().focus().blur();
    registrationPageStepsEmailField.verifyRegistrationButtonIsDisabled();
    registrationPageStepsLastNameField.validateLastNameIsRequeredMessage()
})

it('should show "Last name has to be from 2 to 20 characters long" when the username contains 1 letter', ()=> {
    registrationPage.getSignupLastName().type('Z');
    registrationPage.getRegisterButton().click({force: true});
    registrationPageStepsLastNameField.validateLastNameIsIncorrectLengthMessage()
    })

it('should show "Last name has to be from 2 to 20 characters long" when the lastname contains 21 letters', ()=> {
    registrationPage.getSignupLastName().type('ZholudovaZholudovaZholudovaZholudova');
    registrationPage.getRegisterButton().click({force: true});
    registrationPageStepsLastNameField.validateLastNameIsIncorrectLengthMessage()
    })  

it('should show "Last name is invalid" when the username contains special characters', ()=> {
    registrationPage.getSignupLastName().type('Zhol^&*');
    registrationPage.getRegisterButton().click({force: true});
    registrationPageStepsLastNameField.validateLastNameIsIncorrectMessage()
        })

it('should show "Last name is invalid" when the username contains digits characters', ()=> {
    registrationPage.getSignupLastName().type('Zholudova123')
    registrationPage.getRegisterButton().click({force: true});
    registrationPageStepsLastNameField.validateLastNameIsIncorrectMessage()
            })
           
    })

    