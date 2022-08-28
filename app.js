import mysql from "mysql2";
import inquirer from "inquirer";
import { db } from "./db/connection.js";
import cTable, { getTable } from "console.table";
import { questionObject } from "./src/questions.js";
import { initializer, currentDepartments, currentRoles, currentRoster } from "./src/questionLists.js"
import { addNewEmployee, createNewDepartment, createNewRole } from "./src/helpers.js";




async function init() {
    await initializer();
    inquirer.prompt(questionObject.options).then((answers) => {
        console.log(answers);
        const selection = answers.options
        if (selection === `View all departments`) {
            currentDepartments();
        } else if (selection === `Create a new department`) {
           createNewDepartment();
        } else if (selection === `View all roles`) {
            currentRoles();
        } else if (selection === `Create a new role`) {
            createNewRole();
        } else if (selection === `View all employees`) {
            currentRoster();
        } else if (selection === `Add new employee`) {
            addNewEmployee();
        } else if (selection === `Update an employee`) {
            console.log(answers);
        } else if (selection === `Exit`){
            process.exit();
        };
    })
}
init();

export { init }