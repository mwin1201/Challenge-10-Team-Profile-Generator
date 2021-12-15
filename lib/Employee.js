class Employee {
    constructor(name) {
        this.name = name;
        this.id = Math.floor(Math.random() * 10000 + 89999);
        this.email = name + "@fakecompany.com";
    }

    getName() {
        return {
            name: this.name
        };
    }

    getId() {
        return {
            id: this.id
        };
    }

    getEmail() {
        return {
            email: this.email
        };
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;