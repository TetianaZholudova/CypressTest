
describe('Sign up into Hillel website', () => {


    it('Verify user is able to sign up', ()=> {
        cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/')
        cy.get('.hero-descriptor_btn').click()
        cy.get('#signupName').type('Samanta')
        cy.get('#signupLastName').type('Jones')
        cy.get('#signupEmail').type('skajanytyui@att.net')
        cy.get('#signupPassword').type('Testpassword789')
        cy.get('#signupRepeatPassword').type('Testpassword789')
        cy.get('button').contains('Register').click()
    
    
    }) 

} ) 

