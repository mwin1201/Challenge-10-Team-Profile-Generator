const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name) {
        super(name);
        this.officeNumber = Math.floor(Math.random() * 10 +10);
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;