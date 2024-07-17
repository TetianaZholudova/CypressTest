class LoginPage {

    signInButton = '.header_right > .btn'
    logInButton = '.modal-footer > .btn-primary'
    signinEmail = '#signinEmail'
    signinPassword = '#signinPassword'
   

getSignInButton(){
    return cy.get(this.signInButton)
}

getLogInButton(){
    return cy.get(this.logInButton)
}

getSigninEmailButton(){
    return cy.get(this.signinEmail)
}

getSigninPasswordButton(){
    return cy.get(this.signinPassword)
}

}

const loginPage = new LoginPage()
export default loginPage