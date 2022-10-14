import { Given } from "@badeball/cypress-cucumber-preprocessor";
const index = require('../../pages/index')
const { toCamelCase } = require('../../support/helpingMethods')


/**
 * @example Given The user navigate to "Home Page"
 * @description Notes:
 * -The name of the page has to be defined in mergePages.<specific page>.name
 * @param pageName {String} e.g. "Home Page", will navigate to that page
 * @returns {Promise}
 */
function navigateToPage(pageName){
    cy.navigateToPage(pageName)
}
Given(/^the user navigate to "([^"]*)"$/, navigateToPage);
