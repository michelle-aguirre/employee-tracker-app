const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const DIR = path.resolve(__dirname, "output")
const outputPath = path.join(DIR, "team.html");
const template = require("./src/html-template");
var teamList = [];


function appInit() {

    function createManager() {
        console.log("please build your team");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "what is a team manager's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "please enter at least 1 character";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "what is a team manager's ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "please enter a number greater than 0";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "what is a team manager's email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "please enter a valid email address";
                }
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "what is a team manager's office number?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "please enter a valid office number";
                }
            },
        ]).then(answers => {
            console.log(answers)
            var manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamList.push(manager);
            createTeams();
        })
    }
    function createTeams() {
        inquirer.prompt([
            {
                type: "list",
                name: "choice",
                message: "what is a team engineer's name?",
                choices: ['Engineer', 'Intern', 'None']
            }
        ]).then(userChoice => {
            switch (userChoice.choice) {
                case 'Engineer':
                    createEngineer();
                    break;
                case 'Intern':
                    createIntern();
                    break;
                default:
                    buildTeam();
                    break;
            }
        });
    }

    function createEngineer() {

        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "what is a team engineer's name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "please enter at least 1 character";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "what is a team engineer's ID?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "please enter a number greater than 0";
                }
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "what is a team engineer's email?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "please enter a valid email address";
                }
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "what is a team engineer's github user name?",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "please enter at least one character";
                }
            }
        ]).then(answers => {
            console.log(answers)
            var engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamList.push(engineer);
            createTeams();
        });
    }
        function createIntern() {

            inquirer.prompt([
                {
                    type: "input",
                    name: "internName",
                    message: "what is a team intern's name?",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "please enter at least 1 character";
                    }
                },

                {
                    type: "input",
                    name: "internId",
                    message: "what is a team intern's ID?",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "please enter a number greater than 0";
                    }
                },
                {
                    type: "input",
                    name: "internEmail",
                    message: "what is a team intern's email?",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "please enter a valid email address";
                    }
                },
                {
                    type: "input",
                    name: "internSchool",
                    message: "what is a team intern's school name?",
                    validate: answer => {
                        if (answer !== "") {
                            return true;
                        }
                        return "please enter a valid school name";
                    }
                }


            ]).then(answers => {
                console.log(answers)
                var intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                teamList.push(intern);
                createTeams();
            });
        }
            function buildTeam() {
                if (!fs.existsSync(DIR)) {
                    fs.mkdirSync(DIR)
                }
                fs.writeFileSync(outputPath, template(teamList), "utf8")
            }
            createManager();
        }
        appInit();