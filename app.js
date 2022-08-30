import inquirer from "inquirer";
import { questionObject } from "./src/questions.js";
import { initializer, currentDepartments, currentRoles, currentRoster, departments, roles, employees } from "./src/questionLists.js"
import { addNewEmployee, createNewDepartment, createNewRole, updateEmployee } from "./src/helpers.js";

async function init() {
    await initializer();
    await departments();
    await roles();
    await employees();
    inquirer.prompt(questionObject.options).then((answers) => {
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
            updateEmployee();
        } else if (selection === `Exit`){
            process.exit();
        };
    })
}
init();

export { init }