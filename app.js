// Runs the application

var inquirer = require("inquirer");
var Manager = require("./lib/Manager"); 
var Engineer = require("./lib/Engineer");
var Intern = require("./lib/Intern");


const teamMembers = []

function createTeam() {

    inquirer
        .prompt([

            {
                type: "list",
                name: "memberChoice",
                message: "What type of team member are you?",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
                ]
            }

        ]).then(userChoice => {
            // pass in the variable
            switch (userChoice.memberChoice) {
                // in case userChoice
                case "Manager":
                    addManager();
                    break;

                case "Engineer":
                    addEngineer();
                    break;

                case "Intern":
                    addIntern();
                    break;
            }
        })

    function addManager() {
       
        inquirer
            .prompt([

                {
                    type: "input",
                    message: "What is your first name?",
                    name: "managerName"
                },

                {
                    type: "input",
                    message: "What is your employee ID?",
                    name: "managerID"
                },

                {
                    type: "input",
                    message: "What is your email?",
                    name: "managerEmail"
                },

                {
                    type: "input",
                    message: "What is your office number?",
                    name: "managerOfficeNumber"
                }

            ]).then(userChoice => {
                console.log(userChoice);

                const manager = new Manager(userChoice.managerName, userChoice.managerID, userChoice.managerEmail, userChoice.managerOfficeNumber)

                teamMembers.push(manager)

            }) 


            }
    }

    function addEngineer() {
        
        inquirer
            .prompt([

                {
                    type: "input",
                    message: "What is your first name?",
                    name: "engineerName"
                },

                {
                    type: "input",
                    message: "What is your employee ID?",
                    name: "engineerID"
                },

                {
                    type: "input",
                    message: "What is your email?",
                    name: "engineerEmail"
                },

                {
                    type: "input",
                    message: "What is your GitHub username?",
                    name: "gitHubUsername"
                }
            ]).then(userChoice => {
                console.log(userChoice);
            }) 
    }

    function addIntern() {
      
        inquirer
            .prompt([

                {
                    type: "input",
                    message: "What is your first name?",
                    name: "internName"
                },

                {
                    type: "input",
                    message: "What is your employee ID?",
                    name: "internID"
                },

                {
                    type: "input",
                    message: "What is your email?",
                    name: "internEmail"
                },

                {
                    type: "input",
                    message: "What is your school?",
                    name: "internSchool"
                }
            ]).then(userChoice => {
                console.log(userChoice);
            }) 
    }

    createTeam()



