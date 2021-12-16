const inquirer = require("inquirer");
const fs = require("fs");

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Enter the manager's first name: ",
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
        message: "Enter the manager's employee ID: ",
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
        message: "Enter the manager's email address: ",
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
        message: "Enter the manager's office number: ",
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

// function to grab user responses
const promptUser = () => {
    return inquirer.prompt(managerQuestions);
};

// initialize the app
var init = function() {
    promptUser()
    .then(managerAnswers => {
        console.log(managerAnswers);
    })
    .catch(err => {
        console.log(err);
    });
};

// Function call to initialize app
init();