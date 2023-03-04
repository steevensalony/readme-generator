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
    validate: title => {
      if (title) {
        return true;
      } else {
        console.log('A title is required in order to continue!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project.',
    validate: description => {
      if (description) {
        return true; 
      } else {
        console.log('A description is required in order to continue!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How can someone install this project?',
    validate: installation => {
      if (installation) {
        return true;
      } else {
        console.log('Please describe how this project can be installed!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples on how to use this project.',
    validate: usage => {
      if (usage) {
        return true;
      } else {
        console.log('Please provide instructions on how to use this project to continue!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which licence did you use?',
    choices: ['MIT', 'Apache', 'Boost-Software', 'Eclipse-Public', 'Mozilla-public', 'GNU-Lesser-General-Public', 'GNU-General-Public', 'None'],
    validate: Licence => {
      if (Licence) {
        return true;
      } else {
        console.log('Please choose a Licence!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Provide guidelines on how others can contribute to this project',
    validate: contribution => {
      if (contribution) {
        return true;
      } else {
        console.log('Please describe how others can contribute on this projec to continue!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'How did you test this project? Provide some examples on how to run them.',
    validate: test => {
      if (test) {
        return true;
      } else {
        console.log('You must answer this to continue!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'github',
    message: 'Please add your github username',
    validate: github => {
      if (github) {
        return true;
      } else {
        console.log('This field cannot be left blank!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please add your email address',
    validate: email => {
      if (email) {
        return true;
      } else {
        console.log('This field cannot be left blank!');
        return false;
      }
    }
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
function init() {
  inquirer.prompt(questions)
  .then(function (userInput) {
    writeToFile("ReadMe.md", generateMarkDown(userInput))
  });
}

// Function call to initialize app
init();