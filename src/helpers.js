import inquirer from "inquirer";
import { Role } from "../constructors/Role.js";
import { db } from "../db/connection.js";
import { init } from "./../app.js";
import { initializer, rolesFiltered } from "./questionLists.js";
import { questionObject } from "./questions.js";

function contUse() {
    try {
        inquirer.prompt(questionObject.res).then((answer) => {
            const res = answer.res;
            if (res === true) {
                init();
            } else {
                process.exit();
            }
        })
    } catch (error) {
        console.error(error);
    }
};

async function createNewDepartment() {
    try {
        await inquirer.prompt(questionObject.createNewDepartmentQuestion).then((answer) => {
            const name = answer.name;
            db.promise().query(`INSERT INTO department (name) VALUES ('${name}');`);
        });
    } catch (error) {
        console.error(error);
    }
    await initializer();
    contUse();
};

async function createNewRole() {
    try {
        await inquirer.prompt(questionObject.createNewRoleQuestions).then((answers) => {
            const title = answers.title;
            const salary = answers.salary;
            const department = answers.department;
            db.promise().query(`INSERT INTO role (title, salary, department_id) VALUES ('${title}', ${salary}, ${department});`)
        })
        await initializer();
        contUse();
    } catch (error) {
        console.error(error);
    }
};

async function addNewEmployee() {
    try {
        let employeeFirstName = '';
        let employeeLastName = '';
        let dept = 1;
        let employeeRole = '';
        let employeeManager = '';
        await inquirer.prompt(questionObject.newEmployeeName).then((answers) => {
            employeeFirstName = answers.employeeFirstName;
            employeeLastName = answers.employeeLastName;
        });
        await inquirer.prompt(questionObject.newEmployeeDepartment).then((answer) => {
            dept = answer.department;
        });
        await rolesFiltered(dept);
        await inquirer.prompt(questionObject.newEmployeeRole).then((answer) => {
            employeeRole = answer.employeeRole;
        });
        await inquirer.prompt(questionObject.newEmployeeManager).then((answer) => {
            employeeManager = answer.employeeManager;
        });
        await db.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${employeeFirstName}', '${employeeLastName}', ${employeeRole}, ${employeeManager});`);
    } catch (error) {
        console.error(error);
    }
    contUse();
};

async function updateEmployee() {
    let selectedEmployee = -1
    let updatedFName = '';
    let updatedLName = '';
    let updatedDept = -1;
    let updatedRole = '';
    let updatedManager = ''
    try {
        await inquirer.prompt(questionObject.updateEmployeeName).then((answers) => {
            selectedEmployee = answers.id;
            updatedFName = `'${answers.firstName}'`;
            updatedLName = `'${answers.lastName}'`;
            updatedDept = answers.department;
        })
        await rolesFiltered(updatedDept)
        await inquirer.prompt(questionObject.updateEmployeeRole).then((answer) => {
            updatedRole = answer.role;
        })
        await inquirer.prompt(questionObject.updateEmployeeManager).then((answer) => {
            updatedManager = answer.manager;
        })
        await db.promise().query(`UPDATE employee SET first_name = ${updatedFName}, last_name = ${updatedLName}, role_id = ${updatedRole}, manager_id = ${updatedManager} WHERE id= ${selectedEmployee};`)
    } catch (error) {
        console.error(error);
    }
    contUse();
}




export { contUse, createNewDepartment, createNewRole, addNewEmployee, updateEmployee }