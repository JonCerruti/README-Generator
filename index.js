// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'project',
    },
    {
        type: 'input',
        message: 'Write a short description of your project.',
        name: 'desription',
    },
    {
        type: 'input',
        message: 'Enter installation instructions.',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Enter project usage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide information about contributing to this project.',
        name: 'contribute',
    },
    {
        type: 'input',
        message: 'Add information fot testing project.',
        name: 'test',
    },
    {
        type:'rawlist',
        message:'Select projectn license from list below.',
        name: 'license',
        Choices:[
            'MIT',
            'APACHE',
            'GPL',
            'BSD',
            'Creative Commons',
            'Eclipse',
            'GNU',
            'IBM',
            'Mozilla',
            'Perl',
            
        ],
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
