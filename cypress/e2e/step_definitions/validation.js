import { Then } from "@badeball/cypress-cucumber-preprocessor";


/**
 * @example The "company" "link" should be visible
 * @summary Verify that a locator is displayed
 * @description Notes:
 * -The locators name and category has to be defined in <specific page>.locator.<locator category>.<locator name>
 * @param locatorName {string} e.g "company", the name of the locator
 * @param locatorType {string} e.g "link", the category of the locator
 * @returns {Promise}
 */
function elementistVisible(locatorName, locatorType) {
    cy.getElement(locatorName, locatorType).should('be.visible')
}
Then(/^the "([^"]*)" "([^"]*)" should be visible$/, elementistVisible);


/**
 * @example
 * Then the user is redirected to the "Careers Page"
 * @summary Redirect to a specific page
 * @description Notes:
 * -The name of the page has to be defined in index.<specific page>.name
 * @param pageName {String} e.g. "Careers Page", will navigate to that page
 * @returns {Promise}
 */
function redirectToPage(pageName) {
    cy.redirectedToPage(pageName)
}
Then(/^the user is redirected to the "([^"]*)"$/, redirectToPage)


/**
 * @example
 * Then the user is redirected to the "Contact Us Page"
 * @summary Redirect to a specific page
 * @description Notes:
 * -The name of the page has to be defined in index.<specific page>.name
 * @param pageName {String} e.g. "Contact Us Page", will navigate to that page
 * @returns {Promise}
 */
function redirectToPage(pageName) {
    cy.redirectedToPage(pageName)
}
Then(/^the user is redirected to the "([^"]*)" page$/, redirectToPage)


function elementNotVisible(locatorName, locatorType) {
    cy.getElement(locatorName, locatorType).should('not.be.visible')
}
Then(/^the "([^"]*)" "([^"]*)" should be not visible$/, elementNotVisible)

function wait(){
    cy.wait(2000)
}
Then(/^the user wait seconds$/, wait);
