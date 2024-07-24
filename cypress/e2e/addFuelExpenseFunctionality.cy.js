import loginPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/LoginPage.js' 
import carPage from '/Users/tetianazholudova/Documents/CypressTest/cypress/support/pages/CarPage.js'
import fuelExpensesPage from '../support/pages/ExpensesPage' 


describe('Add fuel expenses functionality', () => {
    beforeEach(() => {
    
        cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
        cy.get('.header_right > .btn').click()
    
      })

it('Verify if registered user is able to add fuel expenses to car', ()=> {
  
    loginPage.getSignInButton().click({force: true})
    loginPage.getSigninEmailButton().type('xajaveppeicu-7909@yopmail.com');
    loginPage.getSigninPasswordButton().type('fghRTY789AA', { sensitive: true });
    loginPage.getLogInButton().click()

    carPage.getAddCarButton().click()
    carPage.getAddCarBrand().select('Fiat')
    carPage.getAddCarModel().select('Scudo')
    carPage.getAddCarMileage().type('1200')
    carPage.getAddCarFormButton().click()
    carPage.getFuelExpensesButton().click()

    fuelExpensesPage.getAddExpenseMileage().clear().type('1500')
    fuelExpensesPage.getAddExpenseLiters().type('300')
    fuelExpensesPage.getAddExpenseTotalCost().type('550')
    fuelExpensesPage.getAddExpenseButton().click()


      
    })
    
    })