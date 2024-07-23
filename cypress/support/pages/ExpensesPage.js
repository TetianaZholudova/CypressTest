class FuelExpensesPage {

    addExpenseCar = '#addExpenseCar'
    addExpenseDate = '#addExpenseDate'
    addExpenseMileage = '#addExpenseMileage'
    addExpenseLiters = '#addExpenseLiters'
    addExpenseTotalCost = '#addExpenseTotalCost' 
    addExpenseButton = '.modal-footer > .btn-primary'

    getAddExpenseCar(){
    return cy.get(this.addExpenseCar)
} 

getAddExpenseDate(){
return cy.get(this.addExpenseDate)
}

getAddExpenseMileage(){
    return cy.get(this.addExpenseMileage)
}

getAddExpenseLiters(){
    return cy.get(this.addExpenseLiters)
}

getAddExpenseTotalCost(){
    return cy.get(this.addExpenseTotalCost)
}
getAddExpenseButton(){
    return cy.get(this.addExpenseButton)
}

}

const fuelExpensesPage = new FuelExpensesPage()
export default fuelExpensesPage