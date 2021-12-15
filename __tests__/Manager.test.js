const Manager = require('../lib/Manager');

test("creates Manager object", () => {
    const manager = new Manager("Max");

    expect(manager.name).toBe("Max");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe("Max@fakecompany.com");
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("gets manager's name", () => {
    const manager = new Manager("Max");

    expect(manager.getName()).toHaveProperty('name');
});

test("gets manager's id", () => {
    const manager = new Manager("Max");

    expect(manager.getId()).toHaveProperty('id');
});

test("gets manager's email", () => {
    const manager = new Manager("Max");

    expect(manager.getEmail()).toHaveProperty('email');
});

test("gets manager role", () => {
    const manager = new Manager("Max");

    expect(manager.getRole()).toEqual("Manager");
});