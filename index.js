// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project?', 'Write a desciption of your project', 'What are the installation instructions for your project?', 'What is the usage informatino about your project?', 'Who contributed to your project?', 'What are the test instructions for you project?', 'What is your Github username?', 'What is your email?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
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
                
            ])
        .then((data) => console.log(data))

    
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
writeToFile()