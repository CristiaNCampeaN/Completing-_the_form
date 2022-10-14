// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const {toCamelCase} = require("./helpingMethods");
const index = require("../pages");


Cypress.Commands.add('navigateToPage', (pageName) => {
    try {
        this.currentPage = index[toCamelCase(pageName)]
        cy.visit(`${this.currentPage.domain}${this.currentPage.route}`)
    } catch (err) {
        console.log(`Can't navigate to ${pageName} ${err.stack}`)
    }
})


Cypress.Commands.add('getElement', (locatorName, locatorType) => {
    try {
        cy.get(this.currentPage.locator[toCamelCase(locatorType)][toCamelCase(locatorName)])
    } catch (err) {
        console.log(`Element: ${locatorName} ${locatorType} can't be found ${err.stack}`)
    }
})


Cypress.Commands.add('redirectedToPage', (pageName) => {
    try {
        this.currentPage = index[toCamelCase(pageName)];
        cy.url().should('include', `${this.currentPage.route}`)
    } catch (err) {
        console.log(`Can't be redirected to ${pageName} ${err.stack}`)
    }
})
