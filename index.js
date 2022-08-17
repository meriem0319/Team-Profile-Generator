const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');
const Manager = require('./lib/manager.js');
const renderSite = require('./src/renderSite.js');

const teamMembers = [];

//setting up the manager, engineer, intern questions
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;                
                } else {
                    console.log('Input required, please enter your name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is your employee ID?',
            validate: employeeId => {
                if (employeeId) {
                    return true;                
                } else {
                    console.log('Input required, please enter your employee ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your Email address?',
            validate: email => {
                if (email) {
                    return true;                
                } else {
                    console.log('Input required, please enter your Email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office phone number?',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;                
                } else {
                    console.log('Input required, please enter your office phone number');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        //need a menu prompt to enter the next person 
        promptMenu();
    })
};

//this menu prompt is called at the end of previous function to enter the next person
const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do next?',
            choices: ['Add an engineer', 'Add an intern', 'Finish building team']  
        },
    ]).then(userChoice => {
        switch (userChoice.menu) {
            case 'Add an engineer':
                promptEngineer();
                break;
            case 'Add an Intern':
                promptIntern();
                break;
            default:
                buildTeam();
        }
    });
};

//if engineer is selected:
const promptEngineer = () => {
    console.log('Add an Engineer');
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineer name?',
            validate: name => {
                if (name) {
                    return true;                
                } else {
                    console.log('Input required, please enter the Engineer name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the Engineer employee ID?',
            validate: employeeId => {
                if (employeeId) {
                    return true;                
                } else {
                    console.log('Input required, please enter the Engineer employee ID');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Egineer email address?',
            validate: email => {
                if (email) {
                    return true;                
                } else {
                    console.log('Input required, please enter the Engineer email address');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is the Egineer GitHub Username?',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;                
                } else {
                    console.log('Input required, please enter the Engineer GitHub Username');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(engineer);
        //after entering engineer, it would go back to original promptMenu to select the next person
        promptMenu();
    })
};

//if intern is selected:


