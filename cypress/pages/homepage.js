const { Environment } = require('../support/environment')
const url = new Environment().getBaseUrl();


module.exports = {
    domain: url,
    name: 'homePage',
    route: '/',
    locator: {
        inputField: {
            name: '#name',
            email: '#email',
            phone: '#phone',
            subject: '#subject',
            message: '#description',
        },
        button: {
            submit: '#submitContact'
        }

    },
}

