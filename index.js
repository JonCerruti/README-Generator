// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// an array of questions for user input
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
        message: 'Add information for testing project.',
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

// a function to write README file
function writeToFile(fileName, data) {
    let answers = generateMarkdown(data);
    fs.writeFile(fileName, answers, function(error){
        if (error){
            return console.log(error);
        }else {
            console.log('You successfully created README');
        }
    })
}

// a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data){
        var fileName = 'README.md';
        writeToFile(fileName, data)
    })
}

// Function call to initialize app
init();
