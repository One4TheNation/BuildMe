// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Title of Your Project?",
        name: 'title'
    },
    {
        type: "input",
        message: "Description",
        name: 'description',
    },
    {
        type: "input",
        message: "Installation Instructions ",
        name: 'install',
    },
    {
        type: "input",
        message: "Usage Information",
        name: 'info',
    },
    {
        type: "list",
        message: "License",
        name: 'license',
        choices: ["mit", "apache", "bsd3", "isc", "none"]
    },
    {
        type: "input",
        message: "Contributing Guidelines",
        name: 'guide',
    },
    {
        type: "input",
        message: "Test Instruction",
        name: 'test',
    },
    {
        type: "input",
        message: "Git Hub Username",
        name: 'git',
    },
    {
        type: "input",
        message: "Contact Information",
        name: 'contact',
    },
];

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then((data) => {
        console.log(data);
        const readMe = generateMarkdown(data);
        fs.writeFile('README.md', readMe, (err) => {
            if (err)
                console.log(err);
        });
    });
}
// Function call to initialize app
init();
