//Manager class will extend Employee constructor and have officeNumber, getRole() return 'Manager'

const Employee = require('./employee.js');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}


module.exports = Manager;