const Intern = require('../lib/Intern');

test("creates Intern object", () => {
    const intern = new Intern("Max", 2, "winter@company.com", "University");

    expect(intern.name).toBe("Max");
    expect(intern.id).toBe(2);
    expect(intern.email).toBe("winter@company.com");
    expect(intern.school).toBe("University");
});

test("gets intern's name", () => {
    const intern = new Intern("Max", 2, "winter@company.com", "University");

    expect(intern.getName()).toHaveProperty('name');
});

test("gets intern's id", () => {
    const intern = new Intern("Max", 2, "winter@company.com", "University");

    expect(intern.getId()).toHaveProperty('id');
});

test("gets intern's email", () => {
    const intern = new Intern("Max", 2, "winter@company.com", "University");

    expect(intern.getEmail()).toHaveProperty('email');
});

test("gets intern's school", () => {
    const intern = new Intern("Max", 2, "winter@company.com", "University");

    expect(intern.getSchool()).toHaveProperty('school');
});

test("gets intern role", () => {
    const intern = new Intern("Max", 2, "winter@company.com", "University");

    expect(intern.getRole()).toEqual("Intern");
});