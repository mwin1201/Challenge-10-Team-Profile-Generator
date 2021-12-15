const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, school) {
        super(name);
        this.school = school;
    }

    getSchool() {
        return {
            school: this.school
        };
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;