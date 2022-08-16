//Engineer class will extend Employee constructor and have github username and getGithub() method, getRole() return 'Engineer'

const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor (name, id, email, gitHub) {
        super(name, id, email);

        this.gitHub = gitHub;
    }
    getGithub() {
        return this.gitHub;
    }
    getRole() {
        return 'Engineer';
    }
}


module.exports = Engineer;