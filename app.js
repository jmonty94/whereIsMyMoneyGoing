import mysql from "mysql2";
import inquirer from "inquirer";
import {db} from "./db/connection.js";
import cTable, { getTable } from "console.table";
import { questionObject } from "./src/questions.js";
import {initializer, currentDepartments, currentRoles, currentRoster} from "./src/questionLists.js"




async function init(){
    await initializer();
    inquirer.prompt(questionObject.options).then((answers) => {
        console.log(answers);
        const selection = answers.options
        if (selection === `View all departments`) {
            currentDepartments()
        } else  if (selection === `Create a new department`){
            console.log(answers);
        } else if (selection === `View all roles`){
            currentRoles()
        } else if (selection === `View all employees`){
            currentRoster()
        }
        
    })
}
init();