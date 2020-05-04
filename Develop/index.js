var inquire = require('inquirer');
var generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const axios = require('axios');

const questions = [
    {
     question1: "What is you User GitHub profile picture?",
    
},
{
    question2: "What is your User GitHub email?"
},
];


function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

function init() {

inquire.prompt(questions).then(function(response){
    writeToFile("gitHub.md", generateMarkdown(response))
}).catch(function(err){
    if(err)throw err;
})
}




// fs.writeFile('README.md', '#LAURENS README', function(err){
//     console.log('this should log before line 24 if synchronous')
// })
// var data = 'initial'
// fs.readFile('README.md', 'utf-8', function(err,data){
//     data = data;
//     console.log(data);
// })

// console.log(data)

// console.log('this should execute after fs writefile if synchronous');



// for(let i = 0; i< 50000; i++){
//     console.log(i)
// }

// console.log('hey im done')

init();
// console.log('hey aint nobody got time for that shit')