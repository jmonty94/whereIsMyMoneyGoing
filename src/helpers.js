import inquirer from "inquirer";
import { db } from "../config/connection.js";
import { init } from "./../app.js";
import { employees, initializer, managerRoster, rolesFiltered } from "./questionLists.js";
import { questionObject } from "./questions.js";

async function contUse() {
    try {
        await inquirer.prompt(questionObject.res).then((answer) => {
            const res = answer.res;
            if (res !== true) {
                process.exit();
            };
        });
        await initializer();
        await init();
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
    initializer();
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
        let employeeFirstName
        let employeeLastName
        let dept
        let employeeRole
        let employeeManager
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

async function updateEmployeeName(id) {
    let updatedFName
    let updatedLName
    await inquirer.prompt(questionObject.updateEmployeeName).then((answers) => {
        updatedFName = `'${answers.firstName}'`;
        updatedLName = `'${answers.lastName}'`;
    });
    await db.promise().query(`UPDATE employee SET first_name = ${updatedFName}, last_name = ${updatedLName} WHERE id = ${id};`);
    continueUpdate(id);
    ;
}

async function updateRole(id) {
    let updatedRole;
    let dept;
    await inquirer.prompt(questionObject.updateDept).then((answer) => {
        dept = answer.department;
    });
    await rolesFiltered(dept);
    await inquirer.prompt(questionObject.updateEmployeeRole).then((answer) => {
        updatedRole = answer.role;
    });
    await db.promise().query(`UPDATE employee SET role_id = ${updatedRole} WHERE id = ${id};`);
    continueUpdate(id);
};

async function updateManager(id) {
    await managerRoster();
    let updatedManager;
    await inquirer.prompt(questionObject.updateEmployeeManager).then((answer) => {
        updatedManager = answer.manager
    })
    await db.promise().query(`UPDATE employee SET manager_id = ${updatedManager} WHERE id= ${id};`)
    continueUpdate(id);
};

async function continueUpdate(id) {
    await inquirer.prompt(questionObject.continueUpdate).then((answer) => {
        if (answer.continue === true) {
            updateOptions(id)
        } else {
            contUse()
        }
    })
};
async function updateOptions(id) {
    await inquirer.prompt(questionObject.updateQuestion).then((answer) => {
        const selection = answer.options
        if (selection === `Employee Name`) {
            updateEmployeeName(id);
        } else if (selection === `Employee Role`) {
            updateRole(id);
        } else if (selection === `Employee Manager`) {
            updateManager(id)
        } else if (selection === `Select Different Employee`) {
            updateEmployee();
        };
    });
};

async function updateEmployee() {
    await employees()
    let selectedEmployee = -1
    try {
        await inquirer.prompt(questionObject.employeeSelection).then((answer) => {
            selectedEmployee = answer.id
        })
        if (selectedEmployee === `Go Back`) {
            init();
        } else {
            await updateOptions(selectedEmployee);
        };
    } catch (error) {
        console.error(error);
    };
};




export { contUse, createNewDepartment, createNewRole, addNewEmployee, updateEmployee }