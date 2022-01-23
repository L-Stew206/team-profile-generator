// Global Varibles 
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const buildTeam = require('./dist/generateHtml');
const employeeTeam = [];

function addTeamMember() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Would you like to add a new employee?',
                choices: ['Yes', 'No'],
                name: 'addTeamMember',
            }
        ])
        .then(response => {
            switch (response.addTeamMember) {
                case 'Yes':
                    newEmployee();
                    break;
                case 'No':
                    fs.writeFileSync('./assets/index.html', buildTeam(employeeTeam), err => err ? console.log(err) : console.log('Html Created'))
                    break;
            }
        })
}

function newEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What kinf of employee role do you want to add?',
            name: 'employeeRole',
            choices: ['Manager', 'Engineer', 'Intern']
        }
    ])
        .then(response => {
            switch (response.employeeRole) {
                case 'Manager': newManager()
                    break;
                case 'Engineer': newEngineer()
                    break;
                case 'Intern': newIntern()
                    break;
                default: console.log("data wasn't valid", response)
            }
        })
}

function newManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the managers name?'
            },
            {
                type: 'number',
                name: 'id',
                message: 'What is their work id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the managers email?'
            },
            {
                type: 'number',
                name: 'officenumber',
                message: 'What is their officee number?'
            },
        ])
        .then((response) => {
            console.log(response)
            const manager = new Manager(response.name, response.id, response.email, response.officenumber)
            employeeTeam.push(manager);
            console.log("Added new Manager");
            addTeamMember();
        })
}

function newEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the managers name?'
            },
            {
                type: 'number',
                name: 'id',
                message: 'What is their work id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the managers email?'
            },
            {
                type: 'number',
                name: 'officenumber',
                message: 'What is their officee number?'
            },
        ])
        .then((response) => {
            console.log(response)
            const manager = new Manager(response.name, response.id, response.email, response.officenumber)
            employeeTeam.push(manager);
            console.log("Added new Manager");
            addTeamMember();
        })
}

function newIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the managers name?'
            },
            {
                type: 'number',
                name: 'id',
                message: 'What is their work id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is the managers email?'
            },
            {
                type: 'number',
                name: 'officenumber',
                message: 'What is their officee number?'
            },
        ])
        .then((response) => {
            console.log(response)
            const manager = new Manager(response.name, response.id, response.email, response.officenumber)
            employeeTeam.push(manager);
            console.log("Added new Manager");
            addTeamMember();
        })
}

addTeamMember();






