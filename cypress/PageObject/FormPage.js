class inputForm {
    txtName = "input#name"
    txtPswd = "input#inputPassword4"
    txtEmail = "#inputEmail4"
    txtcompany = "#company"
    txtWeb = "#websitename"
    txtCountry = ":nth-child(3) > .pr-20 > .w-full"
    txtCity = "#inputCity"
    txtAddrs1 = "#inputAddress1"
    txtAddrs2 = "#inputAddress2"
    txtState = "#inputState"
    txtZip = "#inputZip"


    openURL(url){
        return cy.visit(Cypress.env('URL'))
    }
    getNameText(name){
        return cy.get(this.txtName).type(name)
    }
    getPasswordText(pswd){
        return cy.get(this.txtPswd).type(pswd)
    }
    getEmailText(email){
        return cy.get(this.txtEmail).type(email)
    }
    getCompanyText(company){
        return cy.get(this.txtcompany).type(company)
    }
    getWebText(web){
        return cy.get(this.txtWeb).type(web)
    }
    getContry(country){
        return cy.get(this.txtCountry).select(country)
        .should('have.value', 'US')
    }
    getCityText(city){
        return cy.get(this.txtCity).type(city)
    }
    getAdress1Text(adr1){
        return cy.get(this.txtAddrs1).type(adr1)
    }
    getAdress2Text(adr2){
        return cy.get(this.txtAddrs2).type(adr2)
    }
    getStateText(state){
        return cy.get(this.txtState).type(state)
    }
    getZipText(zip){
        return cy.get(this.txtZip).type(zip)
    }
    
}
export default inputForm