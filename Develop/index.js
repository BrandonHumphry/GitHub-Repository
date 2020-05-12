const inquire = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const axios = require('axios');
const fs = require('fs');

const questions = [

    {   
        name: "gitUsername",
        input: "What is your github username?",
        default: "brandonhumphry"
    },

    {
        type: "input",
        name: "gitEmail",
        message: "What is your GitHub email?",
        default: "brandonhumphry@gmail.com"
    },

    {
        name: "projectTitle",
        message: "What is the title of your project?",
        default: 'Cool Project'
    },

    {   
        name: "projectDescription",
        input: "What is your project about?",
        default: "It is an application"
    },

    {   
        name: "tableOfContents",
        type: 'checkbox',
        choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
        input: "What would you like in the table of contents?",
    },

    {   
        name: "Installation",
        input: "What is the command to install app?",
        default: "npm install"
    },
    
    {   
        name: "Usage",
        input: "What is needed to use the app?",
        default: "Node.js"
    },

    {
        type: "list",
        name: "License",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },

    {   
        name: "Contributing",
        input: "What is needed to contribute to the app?",
        default: "GitHub login and public profile"
    },

    {   
        name: "Tests",
        input: "What tests will be ran?",
        default: "Pass/Fail tests"
    },
  
    
    


    


];

function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

async function init() {
const response = await inquire.prompt(questions);
const apiRes = await axios.get('https://api.github.com/users/'+response.gitUsername);
    console.log(apiRes.data)
    console.log(response)
    writeToFile("gitHub.md", generateMarkdown(response))
}

init();
