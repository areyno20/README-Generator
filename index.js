// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateReadME = require("./utils/generateReadME.js")

const questions = [
    { type: "input",
      name: "Title",
      message: "What is the title of the project?",
    },

    { type: "input",
      name: "Description",
      message: "Enter a brief description of your project:",
    },

    { type: "input",
      name: "About",
      message: "Explain in more detail about your project:",
    },

    { type: "input",
      name: "Installation",
      message: "Are there any installation instructions for your project?",
    },

    { type: "input",
      name: "Clone",
      message: "Please put the link to clone the repository if applicable.",
    },

    { type: "list",
      name: "License",
      message: "Please select the license that was used for the project.",
      choices: ["MIT",
                "Apache",
                "Boost",
                "GNU AGPLv3",
                "GNU GPLv3",
                "GNU LGPLv3",
                "Mozilla",],
    },

    { type: "input",
      name: "Test",
      message: "Please enter any testing protocols if applicable for the project.",
    },

    { type: "input",
      name: "Author",
      message: "What is the name of the person who created this project?",
    },

    {type: "input",
      name: "userName",
      message: "What is the GitHub username of the person who created this project?",
    },

    { type: "input",
      name: "UserEmail",
      message: "What is the email for the person who created this project?",
    },

    {type: "input",
      name: "URL",
      message: "What is the URL of the live site?",
    },

    { type: "input",
      name: "Repo",
      message: "What is the URL for the github repository?",
    },
  ];

async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const generateContent = generateReadME(answers);
        await writeFileAsync('./created-readme/README.md', generateContent);
    } catch (err) {
        throw err;
    }
  }

init();
