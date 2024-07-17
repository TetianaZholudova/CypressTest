import loginPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/LoginPage.js' 


describe('User login', () => {

it('Verify if registered user able to log in successfully', ()=> {
  cy.visit('/')
      
  loginPage.getSignInButton().click()
  loginPage.getSigninEmailButton().type('xajaveppeicu-7909@yopmail.com');
  loginPage.getSigninPasswordButton().type('fghRTY789AA', { sensitive: true });
  loginPage.getLogInButton().click()
    
      
    })
    
    })