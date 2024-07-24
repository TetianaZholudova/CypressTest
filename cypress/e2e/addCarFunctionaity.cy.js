import loginPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/LoginPage.js' 
import carPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/CarPage.js'

describe('Add car functionality', () => {
    beforeEach(() => {
    
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
        cy.get('.header_right > .btn').click()
    
      })

it('Verify if registered user able to add car successfully', ()=> {
  
    loginPage.getSignInButton().click({force: true})
    loginPage.getSigninEmailButton().type('xajaveppeicu-7909@yopmail.com');
    loginPage.getSigninPasswordButton().type('fghRTY789AA', { sensitive: true });
    loginPage.getLogInButton().click()

    carPage.getAddCarButton().click()
    // carPage.getAddCarBrand().select(3).should('have.value', '3: 4')
    carPage.getAddCarBrand().select('Porsche')
    carPage.getAddCarModel().select('Panamera')
    carPage.getAddCarMileage().type('1500')
    carPage.getAddCarFormButton().click()
      
    })
    
    })