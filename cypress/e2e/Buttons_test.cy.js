

describe('Header Buttons Tests', () => {
    beforeEach(() => {
    
      cy.visit('https://guest:welcome2qauto@qauto2.forstudy.space/');
    });
  
    // it('Find and validate Home button', () => {
    //   cy.get('header').contains('Home').should('be.visible');
    // });
  
    // it('Find and validate About button', () => {
    //   cy.get('button').contains('About').should('be.visible');
      
    // });
  
    // it('Find and validate Contacts button', () => {
    //   cy.get('button').contains('Contacts').should('be.visible');
      
    // });
  
    // it('Find and validate Guest Log in button', () => {
    //   cy.get('button').contains('Guest log in').should('be.visible');
      
    // });

    // it('Find and validate Sign In button', () => {
    //   cy.get('button').contains('Sign In').should('be.visible');
      
    // });
  
    // it('Find and validate with Facebook icon', () => {
    //   cy.get('.socials_icon.icon.icon-facebook').should('be.visible');
    
    // });
   
    // it('Find and validate with Telegram icon', () => {
    //   cy.get('.socials_icon.icon.icon-telegram').should('be.visible');
    
    // });

    // it('Find and validate with Youtube icon', () => {
    //   cy.get('#contactsSection a:nth-child(3) span').should('be.visible');
    
    // });

    // it('Find and validate with Instagram icon', () => {
    //   cy.get('#contactsSection a:nth-child(4) span').should('be.visible');
    
    // });

    it('Find and validate with LinkedIn icon', () => {
      cy.get('#contactsSection > div > div > div.col-md-6.d-flex.flex-column.align-items-center.align-items-md-start > div > a:nth-child(5) > span').should('be.visible');
    
    });
    
    // it('Find and validate Hillel Link', () => {
    //   cy.get('#contactsSection a.contacts_link.display-4').should('be.visible');
      
    // });
  
    // it('Find and validate Support Link', () => {
    //   cy.get('#contactsSection a.contacts_link.h4').should('be.visible');
      
    // });
  
  
  });

 

  