const Manager = require('../lib/Manager');

test("creates Manager object", () => {
    const manager = new Manager("Max", 2, "winter@company.com", 1);

    expect(manager.name).toBe("Max");
    expect(manager.id).toBe(2);
    expect(manager.email).toBe("winter@company.com");
    expect(manager.officeNumber).toBe(1);
});

test("gets manager's name", () => {
    const manager = new Manager("Max", 2, "winter@company.com", 1);

    expect(manager.getName()).toHaveProperty('name');
});

test("gets manager's id", () => {
    const manager = new Manager("Max", 2, "winter@company.com", 1);

    expect(manager.getId()).toHaveProperty('id');
});

test("gets manager's email", () => {
    const manager = new Manager("Max", 2, "winter@company.com", 1);

    expect(manager.getEmail()).toHaveProperty('email');
});

test("gets manager role", () => {
    const manager = new Manager("Max", 2, "winter@company.com", 1);

    expect(manager.getRole()).toEqual("Manager");
});