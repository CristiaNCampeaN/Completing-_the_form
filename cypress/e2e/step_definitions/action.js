import { When } from "@badeball/cypress-cucumber-preprocessor";
const { toCamelCase, getRandomInput } = require('../../support/helpingMethods')


/**
 * @example The "Logo" "Icon" should be visible
 * @summary Move mouse to element
 * @description Notes:
 * -The locators name and category has to be defined in <specific page>.locator.<locator category>.<locator name>
 * @param locatorName {string} e.g "Logo", the name of the locator
 * @param locatorType {string} e.g "Icon", the category of the locator
 * @returns {Promise}
 */
function moveMouseToElement(locatorName, locatorType) {
    cy.getElement(locatorName, locatorType).trigger('click')
}
When(/^the user move mouse to "([^"]*)" "([^"]*)"$/, moveMouseToElement);


/**
 * @example
 * When the user click on the "Menu" "button"
 * @summary Click on a specific element
 * @description Notes:
 * -The locators name and category has to be defined in <specific page>.locator.<locator category>.<locator name>
 * @param locatorName {string} e.g "Menu", the name of the locator
 * @param locatorType {string} e.g "button", the category of the locator
 * @returns {Promise}
 */
function clickOnElement(locatorName, locatorType){
    cy.getElement(locatorName, locatorType).click()
}
When(/^the user click on "([^"]*)" "([^"]*)"$/, clickOnElement);



function completeInput(formName, table) {
    const tasks = [];
    this.form = { [formName]: {} };
    for (let i = 0; i < table.rawTable.length; i++) {
        const [locatorType, locatorName, text] = [toCamelCase(table.rawTable[i][0]), toCamelCase(table.rawTable[i][1]), table.rawTable[i][2]];
        switch (locatorType) {
            case 'inputField':
                Object.assign(this.form[formName], { [locatorName]: getRandomInput(text) });
                tasks.push(cy.getElement(locatorName, locatorType).type(this.form[formName][locatorName]));
                break;
            case 'checkbox':
                tasks.push(cy.getElement(locatorName, locatorType).check());
                break;
            default:
                throw new Error(`Unknown type of locator "${locatorType}"`);
        }
    }
}
When(/^the user complete the "([^"]*)" form$/, completeInput)


/**
 * @example
 * When the user access in new tab the "Facebook" "Facebook" page
 * @summary Open in same browser tab the "Facebook" page
 * @param locatorName {string} e.g "Facebook" the name of the locator
 * @param locatorType {string} e.g "link", the category of the locator
 */
function newTab(locatorName, locatorType){
    cy.getElement(locatorName, locatorType).invoke('removeAttr', 'target').click()
}
When(/^the user access in new tab the "([^"]*)" "([^"]*)"$/, newTab);


function completeText(locatorName, locatorType, text){
    cy.getElement(locatorName, locatorType).type(text)
}
When(/^the user complete "([^"]*)" "([^"]*)" with "([^"]*)"$/, completeText)


When(/^the user test iframe$/, function () {

    const iframe = cy.get('#gform_ajax_frame_3')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

    iframe.type('Welcome')

});
