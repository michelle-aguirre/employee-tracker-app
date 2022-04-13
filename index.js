const Engineer=require("./lib/Engineer");
const Manager=require("./lib/Manager");
const Intern=require("./lib/Intern");
const inquirer=require("inquirer");
const path=require("path");
const fs=require("fs");

const DIR=path.resolve(__dirname, "output")
const outputPath=path.join(DIR, "team.html");
const template=require("./src/html-template");
var teamList=[];


function appInit() {
  
  function createManager() {
   console.log("please build your team");
   inquirer.prompt([
       {
           type: "input", 
           name: "managerName",
           message: "what is a team manager's name?",
           validate: answer => {
               if(answer !== ""){
                   return true;
               }
               return "please enter at least 1 character";
           }
       },
   ])   
  }  
    


};
