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

async function createNewDepartment(){
    await inquirer.prompt(questionObject.createNewDepartmentQuestion).then((answer) => {
        console.log(answer.name);
        const name = answer.name;
        db.promise().query(`INSERT INTO department (name) VALUES ('${name}');`)
    })
    await initializer();
    contUse();
}

async function createNewRole() {
    try {
        await inquirer.prompt(questionObject.createNewRoleQuestions).then((answers) => {
            console.log(answers);
            const title = answers.title;
            const salary = answers.salary;
            const department = answers.department;
            db.promise().query(`INSERT INTO role (title, salary, department_id) VALUES ('${title}', ${salary}, ${department})`)
        })
        await initializer();
        contUse();
    } catch (error) {
        console.error(error);
    }
}

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
        })
        await inquirer.prompt(questionObject.newEmployeeDepartment).then((answer) => {
            dept = answer.department;
            rolesFiltered(dept)
        })
        console.log(63, dept);
        // await inquirer.prompt(questionObject.newEmployeeRole).then((answer) => {
        //     console.log(answer);
        // });
        console.log(employeeFirstName, employeeLastName, dept);
    } catch (error) {
        console.error(error);
    }
}




export { contUse, createNewDepartment, createNewRole, addNewEmployee }