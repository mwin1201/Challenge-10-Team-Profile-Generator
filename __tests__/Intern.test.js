const Intern = require('../lib/Intern');

test("creates Intern object", () => {
    const intern = new Intern("Max", "University");

    expect(intern.name).toBe("Max");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe("Max@fakecompany.com");
    expect(intern.school).toEqual(expect.any(String));
});

test("gets intern's name", () => {
    const intern = new Intern("Max", "University");

    expect(intern.getName()).toHaveProperty('name');
});

test("gets intern's id", () => {
    const intern = new Intern("Max", "University");

    expect(intern.getId()).toHaveProperty('id');
});

test("gets intern's email", () => {
    const intern = new Intern("Max", "University");

    expect(intern.getEmail()).toHaveProperty('email');
});

test("gets intern's school", () => {
    const intern = new Intern("Max", "University");

    expect(intern.getSchool()).toHaveProperty('school');
});

test("gets intern role", () => {
    const intern = new Intern("Max", "University");

    expect(intern.getRole()).toEqual("Intern");
});