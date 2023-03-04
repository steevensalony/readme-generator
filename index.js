// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What will the title of the project be?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project.',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How can someone install this project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples on how to use this project.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which licence did you use?',
    choices: ['MIT', 'Apache', 'Boost-Software', 'Eclipse-Public', 'Mozilla-public', 'GNU-Lesser-General-Public', 'GNU-General-Public', 'None'],
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Provide guidelines on how others can contribute to this project',
  },
  {
    type: 'input',
    name: 'test',
    message: 'How did you test this project? Provide some examples on how to run them.',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please add your github username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please add your email address',
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error)
        throw error;
      console.log('Awsome! Your ReadMe has been generated!')
  });
}
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();