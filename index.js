const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { create } = require("domain");
const { listenerCount } = require("process");

const myTeamArray = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the manager's first name:",
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("Please enter the manager's first name");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the manager's employee ID:",
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("Please enter the manager's employee id");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the manager's email address:",
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("Please enter the manager's email address");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the manager's office number:",
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("Please enter the manager's first name");
                return false;
            }
        }
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the engineer's first name:",
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("Please enter the engineer's first name");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the engineer's employee ID:",
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("Please enter the engineer's employee id");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the engineer's email address:",
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("Please enter the engineer's email address");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter the engineer's github username:",
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("Please enter the engineer's github username");
                return false;
            }
        }
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the intern's first name:",
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("Please enter the intern's first name");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the intern's employee ID:",
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("Please enter the intern's employee id");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the intern's email address:",
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("Please enter the intern's email address");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school:",
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("Please enter the intern's school");
                return false;
            }
        }
    }
];

const mainMenu = [
    {
        type: 'list',
        name: 'createTeam',
        message: "Do you want to create other employees at this time?",
        choices: [
            "Engineer",
            "Intern",
            "No"
        ],
        validate: userInput => {
            if (userInput) {
                return true;
            }
            else {
                console.log("Please make a selection");
                return false;
            }
        }
    }
];

// function that loops through prompts
const promptLoop = function(decision) {
    if (decision === "Engineer") {
        inquirer.prompt(engineerQuestions)
        .then(({ name, id, email, github }) => {
            const engineer = new Engineer(name, id, email, github);
            myTeamArray.push(engineer);
            showMainMenu();
        })
    }
    if (decision === "Intern") {
        inquirer.prompt(internQuestions)
        .then(({ name, id, email, school }) => {
            const intern = new Intern(name, id, email, school);
            myTeamArray.push(intern);
            showMainMenu();
        })
    }
};

// displays the main menu asking the user if they would like to create more employees
const showMainMenu = () => {
    console.log(
        `========================
        MAIN MENU
========================`
    );
    inquirer.prompt(mainMenu)
    .then(({ createTeam }) => {
        var decision = createTeam;
        if (decision === "No") {
            console.log(myTeamArray);
            let newFile = generateHTML(myTeamArray);
            fs.writeFile('./dist/TeamProfile.html', newFile, function(err) {
                if (err) {
                    throw err;
                }
            });
        }
        else {
            promptLoop(decision);
        }
    });
};

// initialize the app
var init = function() {
    inquirer.prompt(managerQuestions)
    .then(({ name, id, email, officeNumber }) => {
        const manager = new Manager(name, id, email, officeNumber);
        myTeamArray.push(manager);
        showMainMenu();
    })
    .catch(err => {
        console.log(err);
    });
};

// Function call to initialize app
init();