/// <reference types="Cypress" />
import inputForm from "../../PageObject/FormPage"

const ipform = new inputForm()
beforeEach(() => {
    cy.visit(Cypress.env('URL'));
  });

  describe('Input Form', function() {
    
    it('accessibility audit', function() {
        cy.get(':nth-child(20) > .text-black').click()
        cy.injectAxe()
        cy.checkA11y(null, null, null, true)
    })

    it('input form POM',function() {
        ipform.openURL().viewport('samsung-note9')
        cy.get(':nth-child(20) > .text-black').click()
        cy.fixture('inputText.json').then((data)=> {

        ipform.getNameText(data.name)
        ipform.getEmailText(data.email)
        ipform.getPasswordText(data.pswd)
        ipform.getCompanyText(data.company)
        ipform.getWebText(data.web)
        ipform.getContry(data.country)
        ipform.getAdress1Text(data.adr1)
        ipform.getAdress2Text(data.adr2)
        ipform.getCityText(data.city)
        ipform.getStateText(data.state)
        ipform.getZipText(data.zip)

        cy.get('.bg-lambda-900').click()
        //cy.lighthouse()
        cy.lighthouse(
            {
              performance: 60,
              accessibility: 90,
              'best-practices': 80,
              seo: 80,
            },
            {
              formFactor: 'desktop',
              screenEmulation: {
                mobile: false,
                disable: false,
                width: Cypress.config('viewportWidth'),
                height: Cypress.config('viewportHeight'),
                deviceScaleRatio: 1,
               },
              },
          )

        cy.get('.success-msg')
        .contains('Thanks for contacting us, we will get back to you shortly.')
        .should('be.visible')
        cy.then(Cypress.session.clearCurrentSessionData)
    })   
    })  
})






   