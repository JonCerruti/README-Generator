// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// an array of questions for user input
function userInput() {
    return inquirer.prompt([
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
        type:'list',
        message:'Select project license from list below.',
        name: 'license',
        choices:[
            'GNU General Public License v3.0',
            'MIT',
            'Apache license 2.0',
            'none',
            
        ]
    }
])}

// a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err)=> err ? console.error(err) : 
    console.log(`'README.md' has been created`))
        
    }

// a function to initialize app
async function init() {
   let data = await userInput();{
    writeToFile('./utils/README.md', generateMarkdown(data));
   }
}

// Function call to initialize app
init();
