
export class Environment {
    getBaseUrl() {
        let envi = Cypress.env('ENV');
        if (envi === 'production') {
            return "https://automationintesting.online";
        }
        else if (envi === 'dev') {
            return "";
        }
    }
}
