//const { TestWatcher } = require('@jest/core');
const Employee = require('../lib/Employee');

test("creates an Employee object", () => {
    const employee = new Employee("Max", 2, "winter@company.com");

    expect(employee.name).toBe("Max");
    expect(employee.id).toBe(2);
    expect(employee.email).toBe("winter@company.com");
});

test("gets employee's name", () => {
    const employee = new Employee("Max", 2, "winter@company.com");

    expect(employee.getName()).toHaveProperty('name');
});

test("gets employee's id", () => {
    const employee = new Employee("Max", 2, "winter@company.com");

    expect(employee.getId()).toHaveProperty('id');
});

test("gets employee's email", () => {
    const employee = new Employee("Max", 2, "winter@company.com");

    expect(employee.getEmail()).toHaveProperty('email');
});

test("gets employee role", () => {
    const employee = new Employee("Max", 2, "winter@company.com");

    expect(employee.getRole()).toEqual("Employee");
});