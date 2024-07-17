import registrationPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/RegistrationPage.js' 
import registrationPageStepsNameField from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/steps/registrationPageStepsNameField.js' 


describe('Name field validation', () => {
    beforeEach(() => {
    
      cy.visit('/')
      cy.get('.hero-descriptor_btn').click()
  
    })

it('should show "Name is required" when the username field is empty', ()=> {
    registrationPage.getSignupName().click()
    registrationPageStepsNameField.leaveNameFieldEmpty()
})

it('should show "Name has to be from 2 to 20 characters long" when the username contains 1 letter', ()=> {
    registrationPage.getSignupName().type('T');
    registrationPageStepsNameField.incorrectLengthOfNameField()
})    

it('should show "Name has to be from 2 to 20 characters long" when the username contains 21 letters', ()=> {
    registrationPage.getSignupName().type('TetianaOleksandraCleo');
    registrationPageStepsNameField.incorrectLengthOfNameField()
})  

it('should show "Name is invalid" when the username contains special characters', ()=> {
    registrationPage.getSignupName().type('Tetiana^&*&');
    registrationPageStepsNameField.enterIncorrectName()
})

it('should show "Name is invalid" when the username contains digits characters', ()=> {
    registrationPage.getSignupName().type('Tetiana123')
    registrationPageStepsNameField.enterIncorrectName()
})
           
})