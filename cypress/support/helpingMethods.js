const { faker } = require('@faker-js/faker')


function toCamelCase(param) {
    return Cypress._.camelCase(param);
}


function getRandomText() {
    return faker.git.commitMessage()
}


function getRandomFirstName() {
    return faker.name.firstName()
}


function getRandomLastName() {
    return faker.name.lastName()
}

function getRandomName(){
    return `${getRandomFirstName()} ${getRandomLastName()}`
}


function getRandomSubject(){
    return faker.name.jobTitle()
}


function getRandomEmail() {
    return faker.internet.exampleEmail()
}


function getRandomPhoneNumber(){
    return faker.phone.number()
}


function getRandomInput(param) {
    const regex = /(\$\w+).(\w+)/;
    const match = param.match(regex)[0];
    switch (match) {
        case '$random.name':
            return getRandomName();
        case '$random.email':
            return getRandomEmail();
        case '$random.phone':
            return getRandomPhoneNumber();
        case '$random.subject' :
            return getRandomSubject()
        case '$random.message':
            return getRandomText();
        default:
            throw new Error(`There is no implementation for such ${param}`);
    }
}


module.exports = {
    toCamelCase,
    getRandomInput
};
