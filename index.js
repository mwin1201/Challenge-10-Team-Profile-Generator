const inquirer = require("inquirer");
const fs = require("fs");

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
        name: 'githubUsername',
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
]

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
]

// function to grab user responses
const promptUser = () => {
    return inquirer.prompt(managerQuestions);
};

const showMainMenu = () => {
    console.log(
        `========================
        MAIN MENU
========================`
    );
    return inquirer.prompt(mainMenu);
};

// initialize the app
var init = function() {
    promptUser()
    .then(managerAnswers => {
        console.log(managerAnswers);
        showMainMenu();
    })
    .catch(err => {
        console.log(err);
    });
};

// Function call to initialize app
init();