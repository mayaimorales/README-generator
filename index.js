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
        const readmeStr = `# ${inputObj.title}

        \n*[Description](#Description)
        \n*[Installation](#Installation)
        \n*[Usage](#Usage)
        \n*[Credits](#Credits)

        \n## Description
        \n${inputObj.description}
        \n## Installation
        \n${inputObj.installation}
        \n## Usage
        \n${inputObj.usage}
        \n## Credits
        \n${inputObj.github}
        \n${inputObj.linkedin}
        \n## License
        \nLicensed under the MIT License
        \n## Badges
        \n[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

        writeReadMe(readmeStr);
    
        function writeReadMe(readmeStr){
            console.log(readmeStr);
            fs.writeFile('generate.md', readmeStr, function(err){
                if(err){
                    throw err;
                }else{
                    console.log('Yay!');
                }
            })
        }}