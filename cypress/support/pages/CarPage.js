class CarPage {

    addCarButton = '.panel-page_heading > .btn'
    addCarBrand = '#addCarBrand'
    addCarModel = '#addCarModel'
    addCarMileage = '#addCarMileage'
    addCarFormButton = '.modal-footer > .btn-primary'
    addFuelExpensesButton = '.car_add-expense' 

getAddCarButton(){
    return cy.get(this.addCarButton)
} 

getAddCarBrand(){
return cy.get(this.addCarBrand)
}

getAddCarModel(){
    return cy.get(this.addCarModel)
}

getAddCarMileage(){
    return cy.get(this.addCarMileage)
}

getAddCarFormButton(){
    return cy.get(this.addCarFormButton)
}
getFuelExpensesButton(){
    return cy.get(this.addFuelExpensesButton)
}

}

const carPage = new CarPage()
export default carPage