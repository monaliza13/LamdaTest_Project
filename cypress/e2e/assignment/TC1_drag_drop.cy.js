/// <reference types="Cypress" />
import inputForm from "../../PageObject/FormPage"

const ipform = new inputForm()

describe('Drag and Drop Sliders', function() {
it('Sliders Testcase',function() {
    ipform.openURL()
    cy.get(':nth-child(13) > .text-black').click()

    cy.get('.sp__range-success > .sp__range')
    .invoke("val", "95")
    .trigger('change')
    cy.screenshot(`${Date.now()}`);
    
    cy.get('#rangeSuccess')
    .invoke("val", "95")
    .trigger('change')
    .should('have.text',95)
    cy.screenshot(`${Date.now()}`);
    })
})
