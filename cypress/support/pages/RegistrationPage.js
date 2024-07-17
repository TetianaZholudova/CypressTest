class RegistrationPage {

    signupName = '#signupName'
    signupLastName = '#signupLastName'
    signupEmail = '#signupEmail'
    signupPassword = '#signupPassword'
    signupRepeatPassword = '#signupRepeatPassword'
    registerButton = '.modal-footer > .btn'
    errorMessage = '.invalid-feedback > p'
    signUpButton = '.hero-descriptor_btn'


getSignupName(){
return cy.get(this.signupName)
}

getSignupLastName(){
    return cy.get(this.signupLastName)
}

getSignupEmail(){
    return cy.get(this.signupEmail)
}

getSignupPassword(){
    return cy.get(this.signupPassword)
}

getSignupRepeatPassword(){
    return cy.get(this.signupRepeatPassword)
}

getRegisterButton(){
    return cy.get(this.registerButton)
}

getErrorMessage(){
    return cy.get(this.errorMessage)
}

getSignUpButton(){
    return cy.get(this.signUpButton)
}

}

const registrationPage = new RegistrationPage()
export default registrationPage