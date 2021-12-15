//const { TestWatcher } = require('@jest/core');
const Employee = require('../lib/Employee');

test("creates an Employee object", () => {
    const employee = new Employee("Max");

    expect(employee.name).toBe("Max");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("Max@fakecompany.com");
});

test("gets employee's name", () => {
    const employee = new Employee("Max");

    expect(employee.getName()).toHaveProperty('name');
});

test("gets employee's id", () => {
    const employee = new Employee("Max");

    expect(employee.getId()).toHaveProperty('id');
});

test("gets employee's email", () => {
    const employee = new Employee("Max");

    expect(employee.getEmail()).toHaveProperty('email');
});

test("gets employee role", () => {
    const employee = new Employee("Max");

    expect(employee.getRole()).toEqual("Employee");
});