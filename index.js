const inquirer = require('inquirer');

const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Give a description of your project:',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What steps are required to install your application?',
            name: 'installation',

        },
        {
            type: 'input',
            message: 'What instructions are needed in order to properly use your application?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github',
        },
        {
            type: 'input',
            message: 'What is your LinkedIn?',
            name: 'linkedin',
        }
    ])
    .then((response) => {
        generateReadMe(response);
    }
    );

    function generateReadMe(inputObj){
        console.log(inputObj);
        const readmeStr = ``

        writeReadMe(readmeStr);
    
        function writeReadMe(readmeStr){
            console.log(readmeStr);
            fs.writeFile(generate.md, readmeStr, function(err){
                if(err){
                    throw err;
                }else{
                    console.log('Yay!');
                }
            }
        }