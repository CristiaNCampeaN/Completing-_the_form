import { When } from "@badeball/cypress-cucumber-preprocessor";
const { toCamelCase, getRandomInput } = require('../../support/helpingMethods')


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

