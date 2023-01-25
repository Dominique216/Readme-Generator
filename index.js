// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generatemarkdown')

// Creates an array of questions for user input
const questions = ['What is the title of your project?', 'Write a desciption of your project', 'What are the installation instructions for your project?', 'What is the usage information about your project?', 'Who contributed to your project?', 'What are the test instructions for you project?', 'What is your Github username?', 'What is your email?'];

// Creates a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.log('err') : console.log('success'))      
}

// Creates a function to initialize app
function init() {
          inquirer 
            .prompt([
                {
                    type: 'input', 
                    message: questions[0], 
                    name: 'title'
                },
                {
                    type: 'input', 
                    message: questions[1], 
                    name: 'des'
                },
                {
                    type: 'input', 
                    message: questions[2], 
                    name: 'install'
                },
                {
                    type: 'input', 
                    message: questions[3], 
                    name: 'usage'
                },
                {
                    type: 'input', 
                    message: questions[4], 
                    name: 'contr'
                },
                {
                    type: 'input', 
                    message: questions[5], 
                    name: 'test'
                },
                {
                    type: 'input', 
                    message: questions[6], 
                    name: 'git'
                },
                {
                    type: 'input', 
                    message: questions[7], 
                    name: 'email'
                },
                {
                    type: 'checkbox',
                    message: 'Which lisence do you want to choose?',
                    name: 'license',
                    choices: ['MIT', 'BSD', 'GPL'],
                  },
                
            ])
.then((data) => {
            console.log(data)
            writeToFile('README.md', data)})
}

// Function call to initialize app
init();
