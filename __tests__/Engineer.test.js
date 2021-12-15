const Engineer = require('../lib/Engineer');

test("creates Engineer object", () => {
    const engineer = new Engineer("Max","mwin1201");

    expect(engineer.name).toBe("Max");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe("Max@fakecompany.com");
    expect(engineer.github).toBe("mwin1201");
});

test("gets engineer's name", () => {
    const engineer = new Engineer("Max","mwin1201");

    expect(engineer.getName()).toHaveProperty('name');
});

test("gets engineer's id", () => {
    const engineer = new Engineer("Max","mwin1201");

    expect(engineer.getId()).toHaveProperty('id');
});

test("gets engineer's email", () => {
    const engineer = new Engineer("Max","mwin1201");

    expect(engineer.getEmail()).toHaveProperty('email');
});

test("gets engineer's github username", () => {
    const engineer = new Engineer("Max","mwin1201");

    expect(engineer.getGithub()).toHaveProperty('github');
});

test("gets engineer role", () => {
    const engineer = new Engineer("Max","mwin1201");

    expect(engineer.getRole()).toEqual("Engineer");
});