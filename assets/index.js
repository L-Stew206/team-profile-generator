// Global Varibles 
const inquirer = require ('inquirer');
const fs = require ( 'fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const teamArray [];

function addTeamMember () {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add an employee?',
            choices: ['Yes', 'No'],
            name: 'addTeamMember',
        }
    ])
    .then(data => {
        switch(data.addTeamMember) {
            case 'Yes':
                newTeamMember();
                break;
            case 'No':
                fs.writeFileSync('index.html',generateTeam(team),err => err ? console.log(err):console.log('HTML Created'))
                break;
        }
    })
}





    


